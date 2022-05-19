<template>
  <div>
      <input type="text" v-model="newTodo" @keyup.enter="createTodo" ref = "todoInput" placeholder="목표 추가">
      <button @click="createTodo">추가</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        createTodo() {
            const todoItem = {
                title: this.newTodo,
                done: false,
            }

            if(this.newTodo.trim()) {
                // console.log("createTodo!!")
                // console.log(todoItem)
                this.$store.dispatch("createTodo", todoItem)
            } else {
                alert("내용을 입력해주세요")
                this.$refs.todoInput.focus();
            }
            this.newTodo = ''
        }
    }
}
</script>

<style>

</style>