import Vuex from 'vuex'
import Vue from 'vue'
import userdata from './UrData.json'
import gitprofile from './components/services'
Vue.use(Vuex)

const store =new Vuex.Store({
    state: {
      userdata,
      proyects:[]
    },
    mutations: {
      assigngithub(state, res) {
        state.proyects= res;
      }
    },
    actions:{
      github(context, payload){
        gitprofile(payload).then(res=>{
          context.commit('assigngithub', res)
        })
        
        }
      }
    }
  )

  export default store