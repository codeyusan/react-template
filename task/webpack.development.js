const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESlintPlugin = require("eslint-webpack-plugin")
const path = require("path");

module.exports =  {
  mode: 'development',
  entry: '/src/index.ts',
  output: {
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      //使用ts-loader之后可以不使用babel-loader(没有js文件)
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ESlintPlugin({
      context: path.resolve(__dirname, '../src')
    })
  ]
}