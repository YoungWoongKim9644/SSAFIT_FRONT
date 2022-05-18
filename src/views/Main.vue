<template>
  <div class="home">
      메인 페이지
      <div class="body">
        <div class="upper">
          <MainVideoForm></MainVideoForm>
          <MainTodoListForm></MainTodoListForm>
        </div>
        <div>
          <MainCalendar></MainCalendar>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainCalendar from '@/components/main/MainCalendar.vue'
import MainTodoListForm from '@/components/main/MainTodoListForm.vue'
import MainVideoForm from '@/components/main/MainVideoForm.vue'

export default {
  name: 'HomeView',
  components: {
    MainCalendar,
    MainTodoListForm,
    MainVideoForm,
  }
}
</script>

<style scoped>

.body{
display: flex;
flex-direction: column;
margin-left: 3em;
margin-right: 3em;
}

.upper{
  flex-direction: row;
}

</style>