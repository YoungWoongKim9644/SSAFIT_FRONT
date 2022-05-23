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
              <!-- <td><b-btn v-b-modal="modalId(i)">Launch demo modal</b-btn></td> -->
              <td><a href="#" @click="detailModal(review)">{{review.title}}</a></td>
              <!--<router-link class="align-items-center" :to="{name : 'reviewDetail'}">{{review.title}}</router-link> -->
              <td>{{review.writer}}</td>
              <td>{{review.regDate}}</td>
              <td v-if="review.writer == user.id">
                <button @click="updateModal(review)">수정/삭제</button>
              </td>
          </tr>

        </table>

        <router-link :to="{name : 'reviewWrite', params :{video : this.video}}" tag="button">리뷰 등록하기</router-link>
        </b-card-body>
      </b-card>

      <!-- <modal v-if="modalVisible" @close="modalVisible = false" :data="modalData"/> -->

      <b-modal id="detail" hide-footer>
        
        <template #modal-title>
          제목 : <span>{{reviewTitle}}</span>
    </template>
        <div class="d-block text-center">
        <div>{{reviewContent}}</div>
        </div> 
        <button @click="$bvModal.hide('detail')">닫기</button>
      </b-modal>

       <b-modal id="update" hide-footer>
        <template #modal-title>
          제목 : <span>{{reviewTitle}}</span>
<<<<<<< HEAD
    </template>
=======
        </template>
>>>>>>> release

      <div class="d-block text-center">
        <form action="">
          <div>
          <label for="title">제목</label>
          <input v-model="reviewTitle" type="text" id="title">
          </div>

          <div>
          <label for="content">글 내용</label>
          <textarea v-model="reviewContent" rows="10" cols="40"  id="content"/>
          </div>
        </form>        
        </div> 

        <button @click="updateReview()">수정</button>
        <button @click="deleteReview()">삭제</button>
        <button @click="$bvModal.hide('update')">취소</button>
      </b-modal>

  </div>
</template>

<script>
import ReviewDetail from './ReviewDetail.vue'
import {mapState} from 'vuex'
export default {
  
  components : {
    ReviewDetail
  },

  data(){
    return{
      width : 800,
      height : 400,
      video : {},
      reviewList : [],

      modalVisible : false,
      modalData : null,

      reviewContent : '',
      reviewTitle : '',
      reviewNo : '',
    }
  },

  methods:{
    detailModal(review){
      this.reviewContent = review.content
      this.reviewTitle = review.title
      this.reviewNo = review.no
      this.$bvModal.show('detail')
    },

    updateModal(review){
      this.reviewContent = review.content
      this.reviewTitle = review.title
      this.reviewNo = review.no
      this.$bvModal.show('update')
    },
    
    updateReview(){
      this.$bvModal.hide('update')
      const review = {
        no : this.reviewNo,
        title : this.reviewTitle,
        content : this.reviewContent
      }
      this.$store.dispatch('updateReview', review)
    },
    deleteReview(){
      this.$bvModal.hide('update')
      this.$store.dispatch('deleteReview', this.reviewNo)
    },
  },

  created(){
    console.log("Created")
    this.video = this.vds[this.$route.params.id]
    console.log(this.video)
  },
  computed:{
    ...mapState(['videos', 'reviews', 'user']),
    ...mapState({vds : "videos"}),
  }

}
</script>

<style>

</style>