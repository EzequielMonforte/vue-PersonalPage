<template>
<div style="margin-top: 25px"> 
  <about-me/>
  <skills/>
</div>

</template>

<script>
import Skills from '../components/Skills.vue'
import Proyecto from '../components/Proyectos.vue'
import AboutMe from '../components/AboutMe.vue'


export default {
  components:{
    Proyecto, Skills, AboutMe
  },

}
 </script>
 