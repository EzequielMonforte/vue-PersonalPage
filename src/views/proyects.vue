<template>

<proyecto  v-show="cargado"/>


</template>

<script>
import Proyecto from '../components/Proyectos.vue'

export default {
  components:{
    Proyecto
  },
  data(){
    return{
      cargado: false,
    }
  },
  beforeMount: function() {
    this.cargado=true;
  }
}

</script>


