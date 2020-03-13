const debug = process.env.NODE_ENV !== 'production';
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
    exportPathMap: () => ({
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/edit': { page: '/edit' },
    }),
    assetPrefix: !debug ? '' : '',
    webpack(config) {
      config.module.rules.push(
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        },
        {
          test: /\.test.js$/,
          loader: 'ignore-loader',
        },
      );

      return config;
    },
  }),
);
