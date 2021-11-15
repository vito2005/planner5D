const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { ProvidePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './projectsList.js',
    project: './project.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    hot: true,
    port: 5000,
  },
  plugins: [
    new HTMLPlugin({
      template: './pages/index.html',
      title:
        '3D Home Design Software | House Design Online for Free - Planner 5D',
      chunks: ['index'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HTMLPlugin({
      template: './pages/project.html',
      title: 'Project',
      filename: 'project.html',
      chunks: ['project'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: path.resolve(__dirname, 'docs'),
        },
      ],
    }),
    new ProvidePlugin({
      $: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
