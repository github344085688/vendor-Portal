let proxyObj = {};
 proxyObj['/'] = {
  ws: false,
  target: "http://stage.logisticsteam.com",
  changeOrigin: true,
  pathRewrite:{
    '^/': ''
  }
}

module.exports ={
  devServer:{
    host: 'localhost',
    port: 8080,
    open: true,
    proxy: proxyObj
  },
}
