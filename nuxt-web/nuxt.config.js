module.exports = {
  mode: 'spa',
  assetsSubDirectory: 'static',
  assetsPublicPath: '',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cecc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'none' }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  /*
  **CSS
  */
  css: [
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ]
}
