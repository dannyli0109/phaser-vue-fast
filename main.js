import Vue from 'vue'
import Dashboard from './Dashboard.vue'
import store from './lib/store'


Vue.config.productionTip = false
new Vue({
    render: h => h(Dashboard),
    store
}).$mount('#app')