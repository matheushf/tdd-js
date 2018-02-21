import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './index',
  devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include },
    ],
  },
};
