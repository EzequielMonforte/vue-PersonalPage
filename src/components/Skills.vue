<template>
    <div class="container my-2">
        <h2>Lenguajes</h2>
        <m-item v-for="skill in skills" :text="skill[0]"  :progress="skill[1]" ></m-item>
        <h2>Frameworks</h2>
        
    </div>
</template>

<script>
import MItem from './SkillItem.vue'
export default {
    components:{    
        MItem
    },
    data(){
        return{
            //FIXME: order by percent
            skills: this.$store.state.userdata.skills.languajes
        }
    }
}
</script>

