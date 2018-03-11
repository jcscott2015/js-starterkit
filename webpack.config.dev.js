import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', 'map']
  },
  devtool: 'inline-source-map',
  /* Defining path seems necessary for this to work consistently on Windows machines. */
  // entry: [
  //   'webpack/hot/dev-server',
  //   'webpack-hot-middleware/client', path.resolve(__dirname, 'src/index.js')
  // ],
  target: 'web',
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, './dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true // set to false to see a list of every file being bundled.
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      title: 'JS Starter Kit',
      template: './src/index.html',
      filename: "./index.html",
      xhtml: true
    }),

    new ExtractTextPlugin("css/index.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg|svg)$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader'
      },
    }, {
      test: /(\.css|\.scss|\.sass)$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, './src', './scss')],
            sourceMap: true
          }
        }]
      })
    }]
  }
}
