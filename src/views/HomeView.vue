<template>
  <div class="container">
    <div class="col">
      
      <div class="row">
      <b-card class="mt-3 mx-3 mb-3" style="width: 40rem">
        <b-card-title>비디오</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
          <div>
    <h2>영상 리스트</h2>
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
        <button @click="toVideo"></button>
        <router-link class="ml-3 mt-3" to="/video/" tag="button">시청하기</router-link>
        </b-card-body>
      </b-card>

      <b-card class="mt-3 mx-3 mb-3" style="width: 20rem">
        <b-card-title>투두 리스트</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
        <TodoL></TodoL>
        <TodoWr></TodoWr>
        <router-link to="/todo" tag="button">뚜루뚜루</router-link>
        </b-card-body>
      </b-card>
      </div>

      <b-card>
        <b-card-title>달력</b-card-title>
        <b-card-header></b-card-header>
        <b-card-body>
         <router-link to="/calendar" tag="button">빠라빠라</router-link>
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
    ...mapState({vds : "videos"})
  },

  created(){
      this.$store.dispatch('insertVideos', videos)
  }

}
</script>

<style scoped>

</style>
