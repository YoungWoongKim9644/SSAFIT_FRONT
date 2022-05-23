<template>
  <div class="container">
    <div class="col">
      
      <div class="row">
      <b-card class="mt-3 mx-3 mb-3" style="width: 45rem">
        <b-card-title>운동 관련 영상</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
          <div>
    <!-- <video-list videoId="jAH3MEsh3aU" :width="560" :height="315"></video-list> -->
    <b-carousel
      id="carousel"
      class="text-center"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <div v-for="(part, index) in videos" :key="index" ref="partList" >
          <b-carousel-slide class="text-center">
            <template #img>
                <div class="card">
        <iframe 
            :width="width" 
            :height="height" 
            :src="`https://www.youtube.com/embed/${part.id}`" 
            :title= "`${part.title}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            ></iframe>
            <span>{{part.title}}</span>
    </div>
            </template>
          </b-carousel-slide>
        </div>

    </b-carousel> 
</div>
        <button @click="toVideo" class="btn btn-primary mt-3">시청하기</button>
        </b-card-body>
      </b-card>

      <b-card class="mt-3 mx-3 mb-3" style="width: 20rem">
        <b-card-title>{{user.id}}님의 ToDo 리스트</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        <TodoL></TodoL>
        <TodoWr></TodoWr>
        </b-card-body>
      </b-card>
      </div>

      <b-card>
        <b-card-title>
          <div class="d-flex justify-content-between mx-3">
          Calendar
          <router-link to="/calendar" tag="button" class="btn btn-secondary">전체 보기</router-link>
          </div></b-card-title>
        <b-card-header> <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div></b-card-header>
        <b-card-body class="days">
          <!-- <div>{{week[0].date}}</div>
          <div>{{week[1].date}}</div>
          <div>{{week[2].date}}</div>
          <div>{{week[3].date}}</div>
          <div>{{week[4].date}}</div>
          <div>{{week[5].date}}</div>
          <div>{{week[6].date}}</div> -->
         
        </b-card-body>
      </b-card>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import TodoL from '../components/todo/TodoList.vue'
import TodoWr from '../components/todo/TodoListWrite.vue'
import Calendar from '@/components/main/Calendar.vue'
import Todo from '@/components/main/Todo.vue'
import VideoForm from '@/components/main/VideoForm.vue'
import videos from '@/data/video.json'
import {mapState} from 'vuex'
export default {
  name: "HomeView",
  components : {
    Calendar,
    Todo,
    VideoForm,
    TodoL,
    TodoWr
  },

  data(){
    return{
      width: 560,
      height: 315,
      videos,
      sliding: null,
      slide : 0

    }
  },

  methods:{
   onSlideStart(slide) {
     console.log(slide)
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log(slide)
        this.sliding = false
      },
      toVideo(){
        const selected = this.vds[this.slide]
        this.$router.push({path : "/video/" + this.slide})
      }
  },

  computed :{
    ...mapState(["user","week"]),
    ...mapState({vds : "videos"})
  },

  created(){
      this.$store.dispatch('insertVideos', videos)
  },

  mounted(){

  }

}
</script>

<style scoped>

.weekdays {
  width: 100%;
  height: 5rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
}

.weekdays div {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  width: calc(60rem / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}

.days {
  color: rgb(0, 0, 0);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.days div{
  width: calc(55rem/7);
}

</style>
