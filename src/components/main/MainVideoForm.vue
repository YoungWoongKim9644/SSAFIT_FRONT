<template>
    <span>비디오
    <button @click = "VideoForm">비디오</button>
  </span>
</template>

<script>
export default {

    methods : {
        VideoForm(){
            this.$router.push('video')
        }
    }

}
</script>

<style>

</style>