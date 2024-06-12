const { dependencies } = require('./package.json');

module.exports = {
  name: 'sharedComponent',
  exposes: {
    './Button': './src/Button',
    './Footer': './src/Footer',
    './Header': './src/Header',
    './Title': './src/Title',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
