/**
 * Created by f on 2022/9/21.
 */
module.exports = {
  //webpack - dev - server 的配置项
  devServer: {
    host: 'localhost',
    port: 8081,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.220:8989', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: true,
  parallel: undefined,
  css: undefined
}