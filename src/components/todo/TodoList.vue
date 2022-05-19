<template>
  <div>
      <h4>하루 목표 리스트</h4>
      <todo-list-item 
        v-for="(todo, index) in todos" 
        :key="index" 
        :item="todo">
        </todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/todo/TodoListItem.vue'
import {mapState} from 'vuex';

export default {
    name:'TodoList',
    components: {
      TodoListItem,
    },
    computed: {
      ...mapState([
        'todos'
      ])
    }
};
</script>

<style>

</style>