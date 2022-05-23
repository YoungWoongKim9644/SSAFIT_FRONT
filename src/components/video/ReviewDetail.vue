<template>
   <div>
    {{ data.title }}
    {{ data.content }}
    <button @click="$emit('close')">Cancel</button>
  </div>
</template>

<script>
export default {
  props:['data']

}
</script>

<style>

</style>