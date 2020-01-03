/* 
webpack基础配置
*/
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {resolve} = require('./utils')

module.exports = {

  // 指定打包的基础目录的绝对路径(默认是执行命令的目录)
  context: resolve(''), 
 
  // 入口
  entry: {
    app: resolve('src')
  },
  
  // 出口
  output: {
    path: resolve('dist'),
  },

  // 模块加载器
  module: {
    rules: [
      {
        enforce: "pre", // 前置loader, 最先执行
        test: /\.js$/,
        // exclude: /node_modules/,
        include: resolve('src'),
        loader: "eslint-loader",
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },

      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [resolve('src')]
      },

      {
        test: /\.png|jpe?g|svg|gif$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024*1,
              name: 'img/[name].[hash].[ext]' // 此处hash等同于cotnenthash
            }
          }
        ],
      }
    ]
  },

  // 插件
  plugins: [
    // 提示打包进度
    new webpack.ProgressPlugin(),
    // 自动加载模块，而不必到处 import 或 require
    new webpack.ProvidePlugin({ 
      axios: 'axios'
    }),
    // 拷贝静态资源到打包文件夹
    new CopyWebpackPlugin([
      {
        from: resolve('public'),
        to: resolve('dist'),
        ignore: ['index.html']
      }
    ])
  ],
}