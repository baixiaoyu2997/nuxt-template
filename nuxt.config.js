import { defineNuxtConfig } from '@nuxt/bridge'
import defu from 'defu'
import { vantConfig } from './config/vant'

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
    '@nuxtjs/eslint-module',
    // '@nuxtjs/stylelint-module',
  ],
  stylelint: {
    failOnError: false,
  },
  eslint: {
    failOnError: false,
  },
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  axios: {},
}

export default defineNuxtConfig(defu(config, vantConfig))
