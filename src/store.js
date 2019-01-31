import Vuex from 'vuex'
import Vue from 'vue'
import userdata from './UrData.json'
import gitprofile from './components/services'


for (const link in userdata.links) {
  if (userdata.links.hasOwnProperty(link)) {
    var linkref
    if(userdata.links[link]==userdata.links['github']){
      linkref = userdata.links[link].toString().replace(/https:\/\/github.com\//
        , "https://api.github.com/users/")+"/repos"
    }else
    linkref=userdata.links[link]
      userdata[`${link}`]= linkref
  }
}


Vue.use(Vuex)

const store =new Vuex.Store({
    state: {
      userdata,
      proyects:[],
      loading:false
    },
    mutations: {
      assigngithub(state, res) {
        state.proyects= res;

      },
      loader(state, boolean){
        state.loading= boolean

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