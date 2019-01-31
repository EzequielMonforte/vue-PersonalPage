<template>
    

    <div id="card" class="proy-item mx-2 mb-2 mt-2 p-3">
        <a v-if="proyecto" :href="proyecto.html_url" target="_blank">
        <img class="card-img-top px-1" :src='imagen'/>
        
        
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


