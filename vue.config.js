const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  outputDir: './dist',
  publicPath: '/eunwk-vue-template/',
  runtimeCompiler: true,
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    },
    resolve: {
      extensions: ['.js', '.vue'], // import 할때 확장자 제거가능
    },
  },
});
