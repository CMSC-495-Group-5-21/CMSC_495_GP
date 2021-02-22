module.exports = {
  pages: {
    'index': {
      entry: '/src/pages/home/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'reservation': {
      entry: '/src/pages/reservation/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
  }
}
