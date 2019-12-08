import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import socketio from 'socket.io-client'
//import VueSocketio from 'vue-socket.io'
import App from './App.vue'

//export const SocketInstance = socketio('http://localhost:3001');
//Vue.use(VueSocketio,'http://localhost:3001')
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
