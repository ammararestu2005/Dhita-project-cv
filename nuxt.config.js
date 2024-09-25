export default {
  // Global page headers
  head: {
    title: 'project-cv',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Curriculum Vitae' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [],

  // Modules
  modules: [],

  // Build Configuration
  build: {}
}
