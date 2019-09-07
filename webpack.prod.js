const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const CompressionPlugin = require('compression-webpack-plugin');

// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true,
          //     config: {
          //       path: __dirname + '/postcss.config.js',
          //       ctx: {
          //         env: 'production'
          //       }
          //     }
          //   }
          // },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        },
        // styles: {
        //   name: 'all',
        //   test: /\.s?css$/,
        //   chunks: 'all',
        //   enforce: true,
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        // },
      }
    },
    minimizer: [
      new TerserPlugin({
        chunkFilter: (chunk) => {
          // Exclude uglification for the `vendor` chunk
          if (chunk.name === 'main') {
            return false;
          }
          

          return true;
        },
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'all.css',
      chunkFilename: 'vendor.css'
    }),
    // new CompressionPlugin({
    //   test: /\.(html|css|js)(\?.*)?$/i // only compressed html/css/js, skips compressing sourcemaps etc
    // }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      gifsicle: {
        // lossless gif compressor
        optimizationLevel: 9
      },
      pngquant: {
        // lossy png compressor, remove for default lossless
        quality: '75'
      },
      plugins: [
        imageminMozjpeg({
          // lossy jpg compressor, remove for default lossless
          quality: '75'
        })
      ]
    }),
    // new FaviconsWebpackPlugin({
    //   logo: './src/img/logo.svg',
    //   icons: {
    //     twitter: true,
    //     windows: true
    //   }
    // }),
    // new OfflinePlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
});
