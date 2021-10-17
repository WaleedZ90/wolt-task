import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const prodConfig: Configuration = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserPlugin({
      terserOptions: {
        compress: {
          inline: false,
        },
      },
    }),
  ],
});

export default prodConfig;
