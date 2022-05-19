<template>
  <div>
      <label @click="updateTodo">
      <!-- <button >o</button> -->
      <input type="checkbox">
      <span :class="{'is-done': item.done}" @click="updateTodo">{{ item.title }} &nbsp;</span>
      </label>
      <button @click="deleteTodo">x</button>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        deleteTodo() {
            this.$store.dispatch('deleteTodo', this.item)
        },
        updateTodo() {
            this.$store.dispatch('updateTodo', this.item)
        }
    }
}
</script>

<style>
.is-done {
    text-decoration: line-through;
}
</style>