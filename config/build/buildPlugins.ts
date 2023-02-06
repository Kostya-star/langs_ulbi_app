import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
