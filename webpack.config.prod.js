import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool : 'source-map',
  entry : {
    vendor: path.resolve(__dirname, 'src/vendor.js'),
    main: path.resolve(__dirname, 'src/index.js')
  },
  target : 'web',
  output : {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    //filename: '[name].[chunkhash].js'
    chunkFilename: "[chunkhash].[id].chunk.js"
  },
  plugins : [
    new webpack.LoaderOptionsPlugin({debug: false, minimize: true}),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    /* Use CommonsChunkPlugin to create a separate bundle of vendor libraries so that they're cached separately. */
    new webpack
      .optimize
      .CommonsChunkPlugin({name: 'vendor'}),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties you define here are available in index.html using
      // htmlWebpackPlugin.options.varName
      trackJSToken: 'INSERT YOUR TOKEN HERE'
    }),

    // Minify JS

    new webpack
      .optimize
      .UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: true
        }
      })
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
};