module.exports = (phase, { defaultConfig }) => {
  const withPlugins = require('next-compose-plugins');
  const withImages = require('next-images');
  const withCSS = require('@zeit/next-css');
  const withTM = require('next-plugin-transpile-modules');

  const nextConfig = {
    webpack: config => config,
  };

  const plugins = [
    [withCSS],
    [withImages],
    [
      withTM,
      {
        transpileModules: ['@picter/prisma'],
      },
    ],
  ];

  return withPlugins(plugins, nextConfig)(phase, defaultConfig);
};
