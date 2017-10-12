//Dependencies
import webpackMerge from 'webpack-merge';

//webpack configuration
import commonConfig from './webpack.config.common';
import { context, devtool, entry, externals, name, output, plugins, target } from './configuration';

//type of configuration
const type = 'client';
export default webpackMerge(commonConfig(type),{
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
