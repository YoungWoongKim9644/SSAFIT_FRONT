<template>
   <span>달력
     <button @click = "ToCalendar">달력</button>
  </span>
</template>

<script>
export default {

    methods: {

        ToCalendar(){
            this.$router.push('calendar')
        }
    }

}
</script>

<style>

</style>