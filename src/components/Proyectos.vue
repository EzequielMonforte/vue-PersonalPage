<template>
<div id="proyecto" class="container">
  <div class="card-deck justify-content-center">
  <proyecto-item v-for="proyect in Mproyects"   :proyecto="proyect"/>
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
      proyects:[],
      userdata: this.$store.state.userdata,
    }
  },
  computed:{
    Mproyects(){
      return this.proyects.filter(proyecto=> proyecto.fork==false)
    }
  } ,

  methods:{
    GetGitProyects: function(){
      GitService(this.userdata['github']).then(res=>{
        this.proyects= res;
        this.$emit('proyectscharged')
        })
        }
  },
  created: function(){

    this.GetGitProyects()
  }


}
</script>


