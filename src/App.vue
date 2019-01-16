<template>
  <div id="app">
    <nav-bar/>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <m-footer/>
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
  name: 'app',


}
</script>





