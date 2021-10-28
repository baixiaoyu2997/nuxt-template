## 安装nuxt-bridge
```sh
yarn add --dev @nuxt/bridge@npm:@nuxt/bridge-edge
```

## 启用volar

## 添加less
添加less和less-loader，less-loader版本应小于`8.0`,8.0之后最低支持要求`webpack5`
## vant
添加`babel-plugin-import`,支持按需加载
## eslint
暂时没有适配`auto import`，禁用no-undef
## TODO
1. stylelint没有高亮
1. stylelint module目前有bug，暂时注释掉。

## 特性
- [x] 支持本地页面暴露给公网，便于调试
- [] vant及按需加载，拆分成单独的module，`@yy/nuxt-vant`
