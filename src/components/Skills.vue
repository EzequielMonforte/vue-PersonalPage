<template>
    <div class="container my-2">
        <div class="py-2" :key="key" v-for="(skill, key) in skills">
            <h3 class="text-left">{{key.charAt(0).toUpperCase() + key.slice(1)}}</h3>
            <m-item :key="key" v-for="(item, key) in skill" :text="item[0]"  :progress="item[1]" />
        </div>
        
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
            skills: this.$store.getters.skillsOrdered
        }
    }
}
</script>

