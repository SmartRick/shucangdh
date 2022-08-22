import Vue from 'vue'
// import Vuesax from 'vuesax'
import App from './App.vue'
import router from '@/router';
import store from "@/store";
import ElementUI from 'element-ui';                 //ElementUI
import 'element-ui/lib/theme-chalk/index.css';      //ElementUI CSS
import 'vuesax/dist/vuesax.css';                    //Vuesax styles
import "@/assets/font/iconfont.css";                //阿里图标库
import 'animate.css';                               //动画特效库
Vue.config.productionTip = false

// Vue.use(Vuesax)
Vue.use(ElementUI)

//全局初始化
new Vue({
    el:'#app',
    store,
    router,
    render: h => h(App),
})
