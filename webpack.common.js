const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    // vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: './img/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      filename: 'about.html',
      template: './src/about.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'contacts',
      filename: 'contacts.html',
      template: './src/contacts.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'documents',
      filename: 'documents.html',
      template: './src/documents.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'feedback',
      filename: 'feedback.html',
      template: './src/feedback.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'news',
      filename: 'news.html',
      template: './src/news.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'news-page',
      filename: 'news-page.html',
      template: './src/news-page.html',
      inject: 'head'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.(woff|woff2|ttf|otf)$/.test(entry)) return 'font';
      },
      fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
      include: 'allAssets'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  externals: {
    $: 'jquery',
    jquery: 'jQuery',
    'window.$': 'jquery'
  }
};
