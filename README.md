## 添加 less

添加 less 和 less-loader，less-loader 版本应小于`8.0`,8.0 之后最低支持要求`webpack5`

## eslint

暂时没有适配`auto import`，禁用 no-undef

## TODO

## 特性

- [x] vueuse
- [ ] 集成图片优化 module,https://github.com/nuxt/image
- [ ] 支持本地页面暴露给公网，便于调试
- [ ] vant 及按需加载，拆分成单独的 module，`@yy/nuxt-vant`
- [ ] 全局环境变量
- [ ] axios封装
  - [ ] 通过环境变量，配置 baseURL。
  - [ ] 设置 timeout 请求超时、断网情况处理。
  - [ ] 设置请求头，携带 token。
  - [ ] 异常拦截处理，后端通过你携带的 token 判断你是否过期，如果返回 401 你可能需要跳转到登录页面，并提示需要重新登录。
响应拦截，通常后端返回 code、data、msg，如果是请求正常，我们可以直接返回 data 数据，如果是异常的 code，我们也可以在这里直接弹出报错提示。
  - [ ] 无感刷新 token，如果你的 token 过期，可以通过后端返回的 refreshToken 调用刷新接口，获取新的 token。当然这里涉及到很多细节，例如终端请求、重新发送请求、重新请求列队。
  - [ ] 中断请求，例如页面切换时，我们要中断正在发生的请求。
- [ ] mock
- [ ] 静态资源地址函数，静态资源组件

  ```js
  export default function baseStaticUrl(src = '') {
  const { VITE_APP_STATIC_URL } = import.meta.env;
  if (src) {
    return `${VITE_APP_STATIC_URL}${src}`;
  }
  return VITE_APP_STATIC_URL as string;
  }
  ```

- [ ] 制作模板
  - [ ] 使用 prettier 格式化，https://juejin.cn/post/7025524870842679310?utm_source=gold_browser_extension#heading-5
