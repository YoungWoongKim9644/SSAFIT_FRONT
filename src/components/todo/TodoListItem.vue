<template>
  <div class="d-flex justify-content-center my-1">
      <label>
      <!-- <button >o</button> -->
      <span :class="{'is-done': item.isDone}" @click="updateTodo"> &#10004; {{ item.action }}</span>
      </label>
      <button class="btn btn-secondary btn-sm ml-3 " id="delButton" @click="deleteTodo">x</button>
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

#delButton{
    color: white;
    font-weight: bold;
    border-color: rgb(218, 54, 51);
}

#delButton:hover {
    background-color: rgb(218, 54, 51);
    color: white;
}

</style>