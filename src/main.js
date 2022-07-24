import Vue from 'vue'
import Vuesax from 'vuesax'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from '@/router';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/font/iconfont.css"; //阿里图标库
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(ElementUI)

//全局初始化
new Vue({
    el:'#app',
    router,
    render: h => h(App),
})
