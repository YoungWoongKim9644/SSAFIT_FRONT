<template>
  <div>
      <input type="text" class="form-control" v-model="newTodo" @keyup.enter="createTodo" ref = "todoInput" placeholder="목표 추가">
      <button @click="createTodo" class="btn btn-secondary btn-sm mx-1">추가</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        createTodo() {


            if(this.newTodo.trim()) {
                
                const todoItem = {
                action: this.newTodo,
                isDone: false,
                id : this.user.id,
                date : now()
                }

                this.$store.dispatch("createTodo", todoItem)
            } else {
                alert("내용을 입력해주세요")
                this.$refs.todoInput.focus();
            }
            this.newTodo = ''
        }
    },

    computed:{
        ...mapState(['user'])
    }
}
</script>

<style>

</style>