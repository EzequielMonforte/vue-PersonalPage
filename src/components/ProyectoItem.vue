<template>
    <div id="card" class="card mb-2 mt-2">
        <a :href="proyecto.html_url" target="_blank">
        <img class="card-img-top p-2" :src='imagen'/>
        <h3 class="card-title mb-3 p-1">{{proyecto.name}}</h3>
        <h6 class="card-subtitle p-2">{{proyecto.description}}</h6>
        </a>
    </div>
</template>
<script>
import picture from '../assets/logo.png'
export default {
    props:{
        proyecto: {}
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
        min-width: 20%;
        max-width: 25%;
    }
    
}

</style>

