import XXH from 'xxhashjs';
import HtmlPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/main.js',
  output: {
    clean: true,
    hashFunction: XXH.h64,
    hashDigestLength: 16,
    filename: 'js/[contenthash].js',
    cssFilename: 'css/[contenthash].css',
    assetModuleFilename: 'assets/[contenthash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        type: 'css/auto',
        loader: 'postcss-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.js'],
  },
  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  dotenv: true,
  experiments: {
    css: true,
  },
};
