const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'api': path.resolve(__dirname, 'src/api'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'common': path.resolve(__dirname, 'src/common'),
        'components': path.resolve(__dirname, 'src/components'),
        'router': path.resolve(__dirname, 'src/router'),
        'store': path.resolve(__dirname, 'src/store'),
        'views': path.resolve(__dirname, 'src/views'),
      }
    }
  }
}