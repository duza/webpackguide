const webpack = require('webpack');
const path = require('path');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png', '.svg'], // automatically resolve certain extentions
    alias: { // create aliases
      Images: path.resolve(__dirname, 'src/assets/images') // src/assets/images alias
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.(sa|sc|c)ss$/, // files ending with .scss
        // use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({ // call our plugin with extract method and add HMR
        //  use: ['css-loader', 'sass-loader', 'postcss-loader'], // use these loaders
        //  fallback: 'style-loader' // fallback for any CSS not extracted
        // })) // end extract
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.jsx$/, // all files with .jsx
        loader: 'babel-loader', // use the babel-loader for all .jsx files
        exclude: /node_modules/ // exclude searching for files  in the node_modules directory
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifscle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      }
    ] // end rules
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFile: "[id].css",
    })
    // new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constuctor and name our css file
    // new webpack.optimize.UglifyJsPlugin() // call the uglify plugin
  ],
  optimization: {
    minimizer: [
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
    historyApiFallback: true, // fallback to /index.html for Single Page Applications.
    inline: true, // inline mode (set to false to disable including client scripts (like livereload)
    open: true // open default browser while launching
  },
  devtool: 'eval-source-map' // enable devtool for better debugging experience
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.optimization.minimizer.push(
    new UglifyJsPlugin({ // call the uglify plugin
      test: /\.js($|\?)/i,
      // sourceMap: true
    }),
  );
  module.exports.plugins.push(
    new OptimizeCSSAssets() // call the css optimizer (minification)
  );
}

