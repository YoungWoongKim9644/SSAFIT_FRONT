<template>
  <div class="container">
    <form action="#">
      <div>
      <label for="title">제목</label>
      <input v-model="title" type="text" id="title">
      </div>

      <div>
      <label for="content">글 내용</label>
      <textarea v-model="content" rows="20" cols="100"  id="content"/>
      </div>
    </form>
    <button @click="writeReview">등록하기</button>
    <button @click="cancel">취소</button>

  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

  data(){
    return{
      content :'',
      title : '',
      writer : '',
      videoTitle : '',
    }
  },

  methods : {
    writeReview(){
      console.log(this.user)
      console.log(this.$route.params)
      const review = {
        title : this.title,
        content : this.content,
        writer : this.user.id,
        videoTitle : this.$route.params.video.title
      }
      console.log(review)
      this.$store.dispatch("writeReview", review)
      
    },
    cancel(){
      this.$router.push({name : 'reviewList'})
    }
  },

  computed:{
      ...mapState(['user'])
  },
  created(){
     
  }
}
</script>

<style>

</style>