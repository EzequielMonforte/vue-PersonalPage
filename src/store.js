import Vuex from 'vuex'
import Vue from 'vue'
import userdata from './UrData.json'
Vue.use(Vuex)

const store =new Vuex.Store({
    state: {
      count: 0,
      userdata
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

  export default store