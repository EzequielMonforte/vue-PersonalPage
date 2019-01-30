<template>
  <div id="app">
    <nav-bar/>
    <m-page-loader v-show="this.$store.state.loading"/>
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
import MPageLoader from './components/shared/Loader.vue'
export default {
  components:{
    NavBar, MFooter, MPageLoader
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





