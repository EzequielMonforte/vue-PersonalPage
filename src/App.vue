<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>

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





