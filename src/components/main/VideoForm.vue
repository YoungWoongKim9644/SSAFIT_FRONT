<template>
  <div>
    <h2>{{$route.params}}</h2>
      <router-link :to="{name : 'reviewList'  }"  role="button">메뉴1</router-link>
      <router-link :to="{name : 'reviewDetail'}" role="button">메뉴2</router-link>
      <router-link :to="{name : 'reviewUpdate'}" role="button">메뉴3</router-link>
      <router-link :to="{name : 'reviewDelete'}" role="button">메뉴4</router-link>
      <router-link :to="{name : 'reviewWrite'}" role="button">메뉴5</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>