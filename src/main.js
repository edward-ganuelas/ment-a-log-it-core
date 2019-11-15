import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
