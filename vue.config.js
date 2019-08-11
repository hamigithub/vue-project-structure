const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  publicPath: PUBLIC_PATH,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成 .map 文件，可提升打包速度和降低项目体积

  productionSourceMap: false,

  // 跨域配置，它会告诉开发服务器，将任何未有匹配到静态文件的请求，都代理到这个URL，来满足跨域的需求

  devServer: {
    proxy: 'http://localhost:4000'
  }
}
