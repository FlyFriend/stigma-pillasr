// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Lantern from 'lantern-ui';
import 'lantern-ui/lib/lantern.css';
import AtComponents from 'at-ui'
import 'at-ui-style'
import App from './App'
import router from './router'

Vue.use(AtComponents)
Vue.use(Lantern)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})