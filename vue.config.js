const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        if (!options.compilerOptions) {
          options.compilerOptions = {};
        }
        options.compilerOptions.isCustomElement = (tag) => tag.startsWith('nord-');
        return options;
      });
  },
});
