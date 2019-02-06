<template>

    <b-navbar toggleable="md" id="navbar" class="shadow">
        
        <b-navbar-brand class=" mr-1">
            <img class="imagennavlogo" src="../assets/logopagina.png" alt="">
        </b-navbar-brand>
        
        <b-collapse is-nav id="nav_collapse">
        <ul class="nav links-navbar">
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
        </b-collapse>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    </b-navbar>

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
