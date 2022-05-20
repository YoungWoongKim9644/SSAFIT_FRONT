<template>
  <div class="container justify-content-center text-center">

          <b-card class="mt-3 mx-3 mb-3" style="height: 40rem">
        <b-card-title>동영상</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        
        <iframe 
            :width="width" 
            :height="height" 
            :src="`https://www.youtube.com/embed/${this.video.id}`" 
            :title= "`${video.title}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            ></iframe>
            <div>{{video.title}}</div>

        </b-card-body>
      </b-card>

            <b-card class="mt-3 mx-3 mb-3" style="height: 40rem">
        <b-card-title>댓글 란</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        
        <table class="table">
          <tr>
            <th> 글번호 </th>
            <th> 제목  </th>
            <th> 작성자 </th>
            <th> 등록일 </th>
          </tr>
          <tr v-for="(review, index) in reviews" :key="index">
              <td>{{review.no}}</td>
              <router-link class="align-items-center" :to="{name : 'reviewDetail'}">{{review.title}}</router-link>
              <td>{{review.writer}}</td>
              <td>{{review.regDate}}</td>
              <td v-if="review.writer == user.id">
                <router-link :to="{name : 'reviewUpdate'}" tag="button">수정/삭제</router-link>
              </td>
          </tr>

        </table>

        <router-link to="/todo" tag="button">뚜루뚜루</router-link>
        </b-card-body>
      </b-card>

  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {

  data(){
    return{
      width : 800,
      height : 400,
      video : {},
      reviewList : []
    }
  },

  created(){
    console.log("Created")
    this.video = this.vds[this.$route.params.id]
    console.log(this.video)
  },
  beforeMount(){
    console.log("beforMount")
    this.$store.dispatch('getReviews', this.video.id)

  },
  computed:{
    ...mapState(['videos', 'reviews', 'user']),
    ...mapState({vds : "videos"}),
  }

}
</script>

<style>

</style>