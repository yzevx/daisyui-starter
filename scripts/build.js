import webpack from 'webpack';
import config from '../webpack.config.js';

webpack({
  mode: 'production',
  ...config,
}).run((err, stats) =>
  process.stdout.write(
    stats.toString({
      colors: true,
    }) + '\n',
  ),
);
