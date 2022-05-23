<template>
  <div>
    <header-nav v-if="isLogin"></header-nav>
    <div v-else id="intro">
    <b-carousel
      id="carousel"
      fade
      class="text-center"
      v-model="slide"
      :interval="8000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <div v-for="(video, index) in videos" :key="index" ref="partList" >
          <b-carousel-slide class="text-center" id="body">
            <template #img id="box">
              <video :src=video type="video/mp4" autoplay muted loop width="2100"></video>
            </template>
          </b-carousel-slide>
        </div>

    </b-carousel> 


    <div id="init-text">
    <span><strong>DONE IS BETTER THEN PERFECT</strong></span>
    </div>

    <div id="init-login">
    <InitLogin @mode="changeMode" v-if="mode == 1 && !isLogin"></InitLogin>
    <InitJoin @mode="changeMode" v-if="mode == 2 && !isLogin"></InitJoin>
    </div>

  </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue"
import InitLogin from "@/views/InitLogin.vue"
import InitJoin from "@/views/InitJoin.vue"
import {mapState} from "vuex"


export default {
  components: {
    HeaderNav,
    InitLogin,
    InitJoin
  },

  data(){
    return{
      mode : 1,
      sliding: null,
      slide : 0,
      videos : [
        'https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-23141-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-man-exercising-outdoors-while-raining-33128-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-man-training-on-the-bars-in-the-gym-23450-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-man-training-outdoors-while-raining-33130-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-woman-stretching-her-arms-780-large.mp4'
        ]

    }
  },

  methods:{

     changeMode(val){
      this.mode = val
    },
   onSlideStart(slide) {
     console.log(slide)
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log(slide)
        this.sliding = false
      }
  },


  computed :{
    ...mapState(["isLogin"]),
  }

}
</script>

<style>
#intro{
  position: relative;
  margin: 0px auto;
}

#init-login{
  width: 50%;
  position: absolute;
  z-index: 1;
  top: 65%;
  width: 100%;
  
}
#init-text span{
  position: absolute;
  z-index: 1;
  font-size: 60px;
  text-align: center;
  top: 25%;
  width: 100%;
  color: aliceblue;
  text-shadow:0.5rem snow;
}

#body{
  width: 100%;
  height: 100vh;
  overflow:visible
}
</style>
