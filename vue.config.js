const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  outputDir: '/eunwk-vue-template/vue2-vuetify2/dist',
  publicPath: '/eunwk-vue-template/vue2-vuetify2/'
});
