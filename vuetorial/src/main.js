// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from 'quasar-framework'

//require(`quasar/dist/quasar.${__THEME}.css`)

import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'
Vue.use(Quasar)
Vue.config.productionTip = false
Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    template: '<App/>',
    components: {App},
    render: h => h(App),
  })
})

