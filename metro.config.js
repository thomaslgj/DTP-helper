// metro.config.js
const path = require('path')

module.exports = {
  // ...
  watchFolders: [
    path.resolve(__dirname, 'components/'),
  ],
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          if (target.hasOwnProperty(name)) {
            return target[name]
          }
          return path.join(process.cwd(), `node_modules/${name}`)
        },
      },
    ),
  },
}