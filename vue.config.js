const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  outputDir: './dist',
  publicPath: '/eunwk-vue-template/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'], // import 할때 확장자 제거가능
    },
  },
});
