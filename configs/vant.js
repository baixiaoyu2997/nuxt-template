import path from 'path'

const vantConfig = ()=>{
  return {
    build: {
      transpile: [/vant.*?less/],
      babel: {
        plugins: [
          [
            'import',
            {
              libraryName: 'vant',
              style: (name) => {
                return `${name}/style/less.js`
              },
            },
            'vant',
          ],
        ],
      },
      loaders: {
        // VantUI 定制主题配置
        less: {
          lessOptions: {
            javascriptEnabled: true, // 开启 Less 行内 JavaScript 支持
            modifyVars: {
              hack: `true; @import "${path.join(
                __dirname,
                '../assets/styles/ui.less'
              )}";`,
            },
          },
        },
      },
    },
  }
}

export default vantConfig
