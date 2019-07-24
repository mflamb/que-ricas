// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Self-host Material Design Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { router, head, isClient }) {

  Vue.use(Vuetify, {
    iconfont: 'md'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
