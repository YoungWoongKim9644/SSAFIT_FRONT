<template>
  <div>
    <div class="container">
    <form action="#">
  <b-card
    style="width: 50rem;"
    class="mt-3 mx-3 mb-3"
  >
    <b-card-body>
      <b-card-title>제목</b-card-title>
      <b-card-text>
        <input class="form-control" v-model="title" type="text" id="title">
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
    </b-list-group>

    <b-card-body>
      <b-card-title>내용</b-card-title>
      <textarea class="form-control" v-model="content" rows="15" cols="100"  id="content"/>
    </b-card-body>
    <button @click="writeReview" class="mx-4 btn btn-secondary btn-sm">등록하기</button>
    <button @click="cancel" class="mx-4 btn btn-secondary btn-sm float-right">취소</button>
  </b-card>
    </form>
    </div>
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
        videoTitle : this.videos[this.$route.params.id].title
      }
      console.log(review)
      this.$store.dispatch("writeReview", review)
      router.push({name : 'reviewList'})
    },
    cancel(){
      this.$router.push({name : 'reviewList'})
    }
  },

  computed:{
      ...mapState(['user','videos'])
  },
  created(){
     
  }
}
</script>

<style>

</style>