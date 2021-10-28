import { defineNuxtConfig } from '@nuxt/bridge'
import defu from 'defu'
import { vantConfig } from './config/vant'

const config = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-vant',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  plugins: ['~/plugins/ui'],
  // Auto import components:   https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/ngrok', // 暂时不支持bridge
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/stylelint
  ],
  stylelint: {
    failOnError: false,
  },
  eslint: {
    failOnError: false,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
}

export default defineNuxtConfig(defu(config, vantConfig))
