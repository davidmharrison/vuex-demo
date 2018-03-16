import Vuex from 'vuex'
import Vue from 'vue'

import sites from './sites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sites
  }
})
