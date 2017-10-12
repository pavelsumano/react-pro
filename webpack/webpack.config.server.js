//Dependencies
import webpackMerge from 'webpack-merge';

//webpack configuration
import commonConfig from './webpack.config.common';

//configuration
import { context, entry, externals, name, output, plugins, target } from './configuration';

//Type of configuration
const type = 'server';
export default webpackMerge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
