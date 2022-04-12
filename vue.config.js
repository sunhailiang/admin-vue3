const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const CompressionPlugin = require('compression-webpack-plugin')
const prod = process.env.NODE_ENV === 'production'
console.log(
  '环境变量+baseapi',
  process.env.NODE_ENV,
  process.env.VUE_APP_BASE_API,
  process.env.VUE_APP_SERVER_URL,
  process.env.outputDir
)
module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (prod) {
      config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin())
    }
    config.module.rule('svg').exclude.add(resolve('src/assets/icons/svg')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  },
  configureWebpack: (config) => {
    const plugin = [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
    if (prod) {
      plugin.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: new RegExp('.(' + ['js', 'css', 'json'].join('|') + ')$'),
          threshold: 10240,
          include: /\/src/,
          exclude: /node_modules/,
          minRatio: 0.8,
          deleteOriginalAssets: false // 此处源文件保留吧，以防不测
        })
      )
    }
    config.plugins = [...config.plugins, ...plugin]
  },
  devServer: {
    disableHostCheck: true,
    useLocalIp: true,
    port: 8080,
    hot: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
        onProxyReq(req, req2, req3) {
          console.log('代理请求？')
        },
        onError(req, req2, req3) {
          console.log('代理失败？')
        }
      }
    }
  }
}
