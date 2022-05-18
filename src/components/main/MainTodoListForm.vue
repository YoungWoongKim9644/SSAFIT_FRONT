<template>
  <span>투두리스트
     <button @click = "TodoList">투두</button>
  </span>
</template>

<script>
export default {

    methods: {
        TodoList(){
            this.$router.push('todoList')
        }
        }
    }

</script>

<style>

</style>