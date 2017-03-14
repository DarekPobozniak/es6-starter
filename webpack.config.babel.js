import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

export default {
  context: sourcePath,
  devtool: isProd ? 'source-map' : 'eval-source-map',
  entry: {
    app: './index.js',
  },
  output: {
    path: distPath,
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
  devServer: {
    contentBase: __dirname + '/src',
  },
};
