<template>


  <div id="proyecto" class="proy-container container">

  <proyecto-item  class="shadow" v-for="proyect in Mproyects" :key="proyect.id"  :proyecto="proyect"/>
  </div>

</template>

<script>
import ProyectoItem from './ProyectoItem.vue'
import GitService from './services'
export default {
  components:{
    ProyectoItem
  },
  data (){
    return{
      total:0, 
    }
  },
  computed:{
    proyects(){
      return this.$store.state.proyects
    },
    Mproyects(){
      return this.proyects.filter(proyecto=> proyecto.fork==false)
    }

  } ,

}
</script>


