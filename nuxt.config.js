import { defineNuxtConfig } from '@nuxt/bridge'
import defu from 'defu'
import * as globalConfig from './config.json'
import { vantConfig, compositionConfig } from './configs'
import { getIPAdress } from './utils/'
const isProd = process.env.NODE_ENV === 'production'

const config = {
  head: {
    title: 'nuxt-vant',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no,viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no, email=no' },
      { name: 'referrer', content: 'no-referrer' }, // 图片引用403
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/styles/theme.css',
    '~/assets/styles/global.less',
    '~/assets/styles/page.less',
  ],
  plugins: ['~/plugins/ui'],
  components: true,
  buildModules: [
    // '@nuxtjs/ngrok', // 暂时不支持bridge
    '@nuxtjs/color-mode', // 支持多主题配置
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],

  modules: [
    [
      '@nuxtjs/axios',
      {
        // debug: !isProd,
        retry: { retries: 3 },
        proxy: !isProd,
        credentials: true,
        timeout: 5000,
      },
    ],
    [
      '@nuxtjs/proxy',
      // {
      //   '/forum/': {
      //     target: 'https://devapi.niuyan.com/',
      //   },
      // },
    ],
    'nuxt-winston-log',
  ],
  loading:false,
  publicRuntimeConfig: {
    ...globalConfig,
    _host: globalConfig._host.browser,
    _publicURL: isProd
      ? globalConfig._publicURL
      : `http://${getIPAdress()}:9002`,
    axios: {
      [isProd ? 'baseURL' : 'prefix']: globalConfig._host.browser.API,
    },
  },
  // privateRuntimeConfig会继承并覆盖publicRuntimeConfig中的配置
  privateRuntimeConfig: {
    ...globalConfig,
    _host: globalConfig._host.server,
    axios: {
      [isProd ? 'baseURL' : 'prefix']: isProd
        ? globalConfig._host.server.API
        : 'http://localhost:9001', // process.env.BASE_URL,
    },
  },
}
// 合并配置
export default defineNuxtConfig(defu(config, compositionConfig(), vantConfig()))
