<template>
<div id="proyecto" class="container">
  <div class="card-deck justify-content-center">
  <proyecto-item  class="shadow" v-for="proyect in Mproyects" :key="proyect.id"  :proyecto="proyect"/>
  </div>
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


