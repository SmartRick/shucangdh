import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局初始化
new Vue({
  render: h => h(App),
}).$mount('#app')
