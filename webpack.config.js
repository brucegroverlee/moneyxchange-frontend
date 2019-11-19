const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => {
  return{
    entry: [
      '@babel/polyfill', 
      './src/index.js'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',  // https://webpack.js.org/guides/public-path/
      filename: '[name].bundle.[hash:4].js',
      chunkFilename: '[name].bundle.[hash:4].js',
    },
    module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },{
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },{
        test: /\.(png|jpe?g|ico|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 25000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        "@root": path.resolve(__dirname, '.'),
        "@actions": path.resolve(__dirname, 'src/actions'),
        "@api": path.resolve(__dirname, 'src/api'),
        "@components": path.resolve(__dirname, 'src/components'),
        "@constants": path.resolve(__dirname, 'src/constants'),
        "@containers": path.resolve(__dirname, 'src/containers'),
        "@pages": path.resolve(__dirname, 'src/pages'),
        "@reducers": path.resolve(__dirname, 'src/reducers'),
        "@styles": path.resolve(__dirname, 'src/styles'),
        "@utils": path.resolve(__dirname, 'src/utils'),
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        //favicon: "./src/images/favicon.png"
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.[hash:4].css',
        chunkFilename: '[name].bundle.[hash:4].css',
      }),
      new Dotenv({
        path: env.ENV_FILE_PATH, // load this now instead of the ones in '.env'
        safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: false, // hide any errors
        defaults: false // load '.env.defaults' as the default values if empty.
      }),
      new webpack.EnvironmentPlugin({})
    ],
    devServer: {
      port: 4000,
      host: '0.0.0.0',
      historyApiFallback: true
    }
  };
}
