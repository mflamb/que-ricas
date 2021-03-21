// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals');

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/, /\.css$/, /\?vue&type=style/]
        })
      ])
    }
  })

  api.loadSource( store  => {
    store.addMetadata('seoImages', {
      homePageImage: require.resolve('./uploads/cartel.jpeg'),
      menuPageImage: require.resolve('./uploads/hangover-bowl.jpeg'),
      storyPageImage: require.resolve('./uploads/sahar-our-story.jpeg')
    })
  })
}
