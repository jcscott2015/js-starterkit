import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool : 'inline-source-map',
  //noInfo : false,
  entry : [path.resolve(__dirname, 'src/index')],
  target : 'web',
  output : {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins : [
    new webpack.LoaderOptionsPlugin({debug: true}),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({template: 'src/index.html', inject: true}),

    new ExtractTextPlugin("index.css")
  ],
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "env": {
            "modules": false
          }
        }
      }, {
        test: /(\.css|\.scss|\.sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src', 'scss')],
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  }
}