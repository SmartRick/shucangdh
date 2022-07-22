import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules/'

Vue.use(Vuex)
/**
 * 全局存储模块
 */
export default new Vuex.Store({
  modules: {
    modules
  }
})
