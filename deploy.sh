#!/usr/bin/env bash

build=true
buildImage=true
push=true
deploy=true
scp=true
# deploy变量文件名前缀
envfile=.deploy-env
# 部署环境
mode="$1"
# 项目名称
name=biba-h5
# 版本号
version=$(cat package.json | grep '"version":' | awk -F '"' '{print $4}')
# commit数量
commitCount=$(git rev-list HEAD --count)

if [ "$mode" = "" ]; then
  echo 'please specify environment for deploy'
  exit
fi

modes=("test" "fat" "prod")
found=false
for i in "${modes[@]}"; do
  [ "$i" == "$mode" ] && found=true
done
if [ "${found}" = false ]; then
  echo "unsupport specified environment \"${mode}\""
  exit
fi

# 导入环境变量
envfiles=("$envfile" "${envfile}.${mode}")
for file in "${envfiles[@]}"; do
  while read line; do
    export "$line"
  done <"$file"
done

containerName="$name"
containerPort=9001
# 宿主机配置/日志路径，挂载到docker容器中的某个指定位置
hostConf=/var/www/${containerName}/config.json
hostLogs=/var/www/${containerName}/logs/
containerConf=/root/config.json
containerLogs=/root/logs
dockerParams="-p ${containerPort}:${containerPort} -v ${hostLogs}:${containerLogs} -v ${hostConf}:${containerConf}"
# time=`date +%Y%m%d%H%M%S`
imageName=${DOCKER_REGISTRY}/${containerName}:v${version}-${commitCount}-${mode}
if [ "$scp" == true ]; then
  imageName=${containerName}:v${version}-${commitCount}-${mode}
fi

# 构建
if [ "$build" == true ]; then
  echo "build ${containerName}"
  # 编译
  npm run build:$mode
fi

# 构建镜像
if [ "$buildImage" == true ]; then
  echo "build ${containerName} docker image"
  # 制作镜像
  docker image build -t "${imageName}" .
fi

# 上传镜像
remoteDir="/home/${SSH_USER}/images"
imageFileName="${containerName}.image"
fileName="${imageFileName}.tar.gz"
if [ "$push" == true ]; then
  if [ "$scp" == true ]; then
    echo "push ${imageName} server"
    docker save -o ${imageFileName} ${imageName}
    tar -zcf ${fileName} ${imageFileName}
    scp "$fileName" ${SSH_USER}@${SSH_HOST}:${remoteDir}
    rm "${imageFileName}"
    rm "$fileName"
  else
    echo "push ${imageName} docker registry"
    # 推送镜像到仓库
    docker push "${imageName}"
  fi
fi

if [ "$scp" == true ]; then
code="
cd ${remoteDir}
tar -zxf ${fileName}
docker load < ${imageFileName}
cd /home/ubuntu/images
docker stop ${containerName}
docker rm ${containerName}_old
docker rename ${containerName} ${containerName}_old
docker run --name ${containerName} -itd ${dockerParams} ${imageName}
cd ${remoteDir}
rm ${imageFileName}
rm ${fileName}
exit
"
else
code="
    # 拉取镜像
    docker pull ${imageName}
    # 停止上个版本容器
    docker stop ${containerName}
    # 删除上上个版本的容器,然后将上个版本的容器重命名
    docker rm ${containerName}_old
    docker rename ${containerName} ${containerName}_old
    # 启动新版本容器
    docker run --name ${containerName} -itd ${dockerParams} ${imageName}
    exit
"
fi

echo "$code"

# 部署
if [ "$deploy" == true ]; then
  echo "开始部署"
  ssh -p "${SSH_PORT}" "${SSH_USER}@${SSH_HOST}" <<end
${code}
end
  echo "部署完毕"
fi
