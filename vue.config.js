/**
 * Created by f on 2022/9/21.
 */
module.exports = {
  //webpack - dev - server 的配置项
  devServer: {
    host: 'localhost',
    port: 8082,
    open: true,
    // disableHostCheck: true,
    proxy: {
      "/api": {
        target: "https://staging.freightapp.com",
        // changeOrigin: true,
        // ws: true,//websocket支持
        secure: false
      },
      "/api1": {
        target: "http://172.16.68.134:8089",
        // changeOrigin: true,
        //ws: true,//websocket支持
        secure: false
      }
    }
  }
}