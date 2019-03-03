<template>
    <div>
        <h2>Hi there!</h2>
        <p>
            {{aboutme}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //todo: format text to have jump o lines
            aboutme: this.$store.state.userdata.about
        }
    }
}
</script>
