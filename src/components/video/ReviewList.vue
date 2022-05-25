<template>
  <div class="container justify-content-center text-center">

          <b-card class="mt-3 mx-3 mb-3" style="height: 40rem">
        <b-card-title>동영상</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        
        <iframe 
            :width="width" 
            :height="height" 
            :src="`https://www.youtube.com/embed/${this.video.youtubeId}`" 
            :title= "`${video.title}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            ></iframe>
            <div>{{video.title}}</div>

      <button class="like__btn float-left ml-3" @click="like">
          <span id="icon">
            <i class="fas fa-thumbs-up" v-if="clicked"></i>
            <i class="far fa-thumbs-up" v-else></i>
          </span>
      </button>

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
                <button class="btn btn-secondary btn-sm" @click="updateModal(review)">수정/삭제</button>
              </td>
          </tr>

        </table>

        <router-link :to="{name : 'reviewWrite', params :{video : this.video}}" tag="button" class="btn btn-secondary" >리뷰 등록하기</router-link>
        </b-card-body>
      </b-card>

      <!-- <modal v-if="modalVisible" @close="modalVisible = false" :data="modalData"/> -->

      <b-modal id="detail" hide-footer>
        
        <template #modal-title>
          <span>{{reviewTitle}}</span>
    </template>
        <div class="d-block text-left">
        <div>{{reviewContent}}</div>
        </div>
        <div>&nbsp;</div> 
        <button class="btn btn-secondary btn-sm float-right" @click="$bvModal.hide('detail')">닫기</button>
      </b-modal>

       <b-modal id="update" hide-footer>
        <template #modal-title>
        <span>{{reviewTitle}}</span>
        </template>

      <div class="d-block text-left">
        <form action="">
          <div>
          <label for="title">제목</label>
          <input class="form-control" v-model="reviewTitle" type="text" id="title">
          <div>&nbsp;</div>
          <label for="content">내용</label>
          </div>

          <div>
          <textarea class="form-control" v-model="reviewContent" rows="10" cols="40"  id="content"/>
          <div>&nbsp;</div>
          </div>
        </form>        
        </div> 

        <div class="mx-3">
        <button class="btn btn-success btn-sm mr-1" @click="updateReview()">수정</button>
        <button class="btn btn-danger btn-sm " @click="deleteReview()">삭제</button>
        <button class="btn btn-secondary btn-sm float-right" @click="$bvModal.hide('update')">취소</button>
        </div>
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

      clicked : '',
      likeIcon : ''
    }
  },

  methods:{

    
    like(){
    if (!this.clicked) {
    this.clicked = true;
    this.$store.dispatch("insertDibs", {id : this.user.id, title : this.video.title})
  } else {
    this.clicked = false;
    this.$store.dispatch("deleteDibs", {id : this.user.id, title : this.video.title})
  }
    },

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
    this.video = this.vds[this.$route.params.id]
    console.log("Created")
    console.log(this.dibs)
    console.log(this.video.title)
    this.clicked = false;
    this.dibs.forEach((element) => {
      if(element.title === this.video.title){
        this.clicked = true;
      }
    });
    console.log(this.clicked)
  },
  computed:{
    ...mapState(['videos', 'reviews', 'user','dibs']),
    ...mapState({vds : "videos"}),
  },

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");

.like__btn {
  padding: 10px 15px;
  background: #0080ff;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}

</style>