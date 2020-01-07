/* 
链式引用预编译三方库
*/

const webpack = require("webpack")
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {resolve} = require('./utils')

module.exports = {
  entry: {
      vendor: ['vue', 'vue-router']
  },
  output: {
      path: resolve('dll_static'),
      library: '_dll_[name]_[hash]',
      filename: '_dll_[name]_[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      root: resolve('dll_static'),
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]_[hash]', //和output.library中一致，值就是输出的manifest.json中的 name值
      path: path.join(__dirname, '../dll_static', '[name].manifest.json')
    })
  ]
}