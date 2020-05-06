// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

// vue.config.js
const vueConfig = {
  configureWebpack: {
    // webpack plugins
    // plugins: [
    //   // Ignore all locale files of moment.js
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    // ]
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#40B376'
        },
        // do not remove this line
        javascriptEnabled: true
      }
    }
  },

  lintOnSave: 'error',

  // disable source map in production
  productionSourceMap: false,

  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}
module.exports = vueConfig
