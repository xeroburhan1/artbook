var webpack = require('webpack');

const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true,
  },
  reactStrictMode: false,
  webpack: (config, { isServer }) => {

    if (!isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /payload$/,
        }),
      );
    }
  
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.RUNTIME_ENV': JSON.stringify(isServer ? 'server' : 'browser'),
      }),
    )
 
    return config;
  },
  distDir: 'build',
  
  
  
}

module.exports = nextConfig
