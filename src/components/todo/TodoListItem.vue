<template>
  <div>
      <label>
      <!-- <button >o</button> -->
      <span :class="{'is-done': item.isDone}" @click="updateTodo">{{ item.action }}  </span>
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
            console.log("isDone : " + this.item.isDone)
        }
    }
}
</script>

<style>
.is-done {
    text-decoration: line-through;
}
</style>