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
        <button @click="toVideo" class="btn btn-secondary mt-3" >시청하기</button>
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
          Today : {{today}}
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
        <b-card-body class="dayss">
          <div>{{week[0].date}}</div>
          <div>{{week[1].date}}</div>
          <div>{{week[2].date}}</div>
          <div>{{week[3].date}}</div>
          <div>{{week[4].date}}</div>
          <div>{{week[5].date}}</div>
          <div>{{week[6].date}}</div>
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
      width: 640,
      height: 315,
      videos,
      sliding: null,
      slide : 0,
      week : [],
      today : ''
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
    ...mapState(["user"]),
    ...mapState({vds : "videos"})
  },

  created(){
      this.$store.dispatch('insertVideos', videos)
  },

  mounted(){
    const date = new Date();
    
const renderCalendar = () => {
  date.setDate(1);
  //2
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      this.today = new Date().getDate(); + " "  + new Date().getDay();
      const day = new Date().getDay()
      for(let x = 0; x <= day; x++){
        this.week.push({day : x, date : i - day + x})
      }
      for(let x = day + 1; x < 7; x++){
        this.week.push({day : x, date : i + (x - day)})
      }
      break;
    } 
  }

  }
  renderCalendar();
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

.dayss {
  color: rgb(0, 0, 0);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.dayss div{
  border-style: solid;
  font-size: 1.4rem;
  margin: 0.3rem;
  padding-left: 1rem;
  height: 5rem;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s;
  width: calc(58rem/7);
}


.dayss div:hover:not(.today):not(.star){
  background-color: #262626;
  border: 0.2rem solid #777;
  cursor: pointer;
}


</style>