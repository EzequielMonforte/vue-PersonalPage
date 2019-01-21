<template>
  <proyecto v-show="ischarged" v-on:proyectscharged="showproyects"/>
</template>

<script>
import Proyecto from '../components/Proyectos.vue'


export default {
  components:{
    Proyecto
  },
  data(){
    return{
      ischarged: false,
      test:false
    }
  },
  methods: {

    showproyects(){
      this.ischarged=true
      
      
    }
  },
  destroyed(){
    this.ischarged=false
  }
}

</script>


