<template>
    <div class="row">
        <h5 class="ml-2 mt-2" >{{text}}</h5>
        <b-progress class="w-100"  :value="progress" :max="100" ></b-progress>   
    </div>
</template>

<script>
export default {
    props:{
        text: String,
        progress: Number
    }
}

</script>
