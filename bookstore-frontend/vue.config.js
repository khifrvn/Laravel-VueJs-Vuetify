module.exports = {
  devServer: {
    proxy: 'http://bookstore-api.test/v1',
    // proxy: 'http://localhost:8000',
  },
  transpileDependencies: [
    'vuetify'
  ]
};
