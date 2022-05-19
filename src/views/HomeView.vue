<template>
  <div class="container">
    <div class="col">
      
      <div class="row">
      <b-card class="mt-3 mx-3 mb-3" style="width: 20rem">
        <b-card-title>비디오</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        <router-link to="/calendar" tag="button">비디오</router-link>
        </b-card-body>
      </b-card>

      <b-card class="mt-3 mx-3 mb-3" style="width: 20rem">
        <b-card-title>투두 리스트</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        <TodoL></TodoL>
        <TodoWr></TodoWr>
        <router-link to="/todo" tag="button">뚜루뚜루</router-link>
        </b-card-body>
      </b-card>
      </div>

      <b-card>
        <b-card-title>달력</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
         <router-link to="/video" tag="button">빠라빠라</router-link>
        </b-card-body>
      </b-card>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import TodoL from '../components/todo/TodoList.vue'
import TodoWr from '../components/todo/TodoListWrite.vue'
import Calendar from '@/components/main/Calendar.vue'
import Todo from '@/components/main/Todo.vue'
import VideoForm from '@/components/main/VideoForm.vue'

export default {
  name: "HomeView",
  components : {
    Calendar,
    Todo,
    VideoForm,
    TodoL,
    TodoWr
  }
}
</script>

<style scoped>

.row b-card{
}

</style>
