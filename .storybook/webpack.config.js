const path = require('path');
const includePath = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@magnetis/astro-galaxy-core': path.resolve(__dirname, '../packages/core/src'),
      '@magnetis/astro-galaxy-icons': path.resolve(__dirname, '../packages/icons/src'),
      '@magnetis/astro-galaxy-components': path.resolve(__dirname, '../packages/components/src'),
    },
  },
};