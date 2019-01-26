<template>
  <div id="app">
    <nav-bar/>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <m-footer class="p-4"/>
  </div>
  
</template>

<script>
import './styles.scss'
import NavBar from './components/NavBar'
import MFooter from './components/Footer'
export default {
  components:{
    NavBar, MFooter
  },
  data(){
    return{
      test:false
    }
  },
  name: 'app',
  mounted: function(){
        this.$store.dispatch('github', this.$store.state.userdata['github'] )
  }

}
</script>





