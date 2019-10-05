module.exports = {
  pages: {
    index: {
      entry: 'src/js/main.js',
      template: 'public/index.html'
    }
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './backend'
    }
  },
  css: {
    loaderOptions: {
      
    }
  }
}
