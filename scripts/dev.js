import { createServer } from 'node:http';
import sirv from 'sirv';
import webpack from 'webpack';
import config from '../webpack.config.js';

webpack({
  mode: 'development',
  ...config,
}).watch(
  {
    ignored: /node_modules/,
    poll: 1000,
  },
  (err, stats) =>
    process.stdout.write(
      stats.toString({
        colors: true,
      }) + '\n',
    ),
);

createServer(
  sirv('./dist', {
    dev: true,
    single: true,
  }),
).listen(80);
