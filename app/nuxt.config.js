module.exports = {
  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    title: 'cecc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    // ['@nuxtjs/localtunnel', { subdomain: 'cecc' }],
    'nuxt-leaflet'
  ],
  /*
  **Vuetify configuration
  */
  vuetify: {
    theme: {
      error: '#FF8A80',
      primary: '#3f51b5'
    }
  },
  /*
  ** Css configuration
  */
  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

