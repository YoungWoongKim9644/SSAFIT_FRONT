<template>
  <div>
      <router-link :to="{name : 'reviewList'  }"  role="button"></router-link>
      <router-link :to="{name : 'reviewDetail'}" role="button"></router-link>
      <router-link :to="{name : 'reviewUpdate'}" role="button"></router-link>
      <router-link :to="{name : 'reviewDelete'}" role="button"></router-link>
      <router-link :to="{name : 'reviewWrite'}" role="button"></router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>