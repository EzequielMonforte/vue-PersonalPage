<template>
    <footer id="footer" class="footer ">
        <div class="row offset-3 ">
            <div class="col-4">
            <h6>{{this.$store.state.userdata.fullname}}</h6>
            <div class="container ">
                <!-- Todo: oop remades -->
            <a :href="$store.state.userdata.linkedin" target="_blank">
                <img class="icon" src="../assets/ic-linkedin.svg"/>
            </a>
            <a :href="$store.state.userdata.github">
            <img class="icon" src="../assets/ic-github.svg"/>
            </a>
            </div>
            </div>
            <div  class="col-4">
            <h6>something here a ??</h6>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
  
}
</script>
