// @vue/composition-api v1.3.0以上时需要配置
const compositionApi = ()=>{
  return {
    alias: {
      '@vue/composition-api$':
        '@vue/composition-api/dist/vue-composition-api.mjs',
    },
    build: {
      // webpack4支持.mjs
      extend(config) {
        config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        })
      },
    },
  }
}
export default compositionApi
