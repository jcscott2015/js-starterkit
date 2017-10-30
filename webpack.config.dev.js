import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool : 'inline-source-map',
  /* Defining path seems necessary for this to work consistently on Windows machines. */
  entry : [path.resolve(__dirname, 'src/index.js')],
  target : 'web',
  output : {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins : [
    new webpack.LoaderOptionsPlugin({debug: true}),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html'
    }),

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