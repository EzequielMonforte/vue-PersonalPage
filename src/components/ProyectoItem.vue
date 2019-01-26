<template>
    
    <div id="card" class="card mb-2 mt-2 p-3">
        <img class="card-img-top px-1" :src='imagen'/>
        <a v-if="proyecto" :href="proyecto.html_url" target="_blank">
        
        <h3 class="card-title mb-3 p-1" v-if="proyecto">{{proyecto.name}}</h3>
    <!-- TODO: control max letters wrapping "..." -->
        <p class="card-subtitle p-2" v-if="proyecto">{{proyecto.description}}</p>
        </a>
        
    </div>
</template>
<script>
import picture from '../assets/logo.png'
export default {
    props:{
        proyecto: {},
    },
    name: 'card',
    data (){
        return{
        imagen:picture,
        }

    }
}
</script>
<style scoped>
@media(min-width: 576px) {
    .card{
        min-width: 23%;
        max-width: 28%;
    }
    
}

</style>

