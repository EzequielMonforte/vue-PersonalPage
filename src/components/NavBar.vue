<template>

    <nav id="navbar" class="navbar bar row m-0">
        <div class="navbar-brand mr-1">
            <img class="imagennavlogo" src="../assets/logopagina.png" alt="">
        </div>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/"> Home </router-link>
            </li>
            <li class="nav-item">
               <router-link class="nav-link" to="/proyects"> Proyects </router-link> 
            </li>
            <b-nav-item-dropdown text="Contact" right>
                <b-dropdown-item class="menulink" :href="'mailto:'+ email">Mail</b-dropdown-item>
            </b-nav-item-dropdown>        
        </ul>

    </nav>

</template>

<script>

export default {
    data(){
        return{
            email: this.$store.state.userdata['email']
        }
    }
}
</script>
