<template>
  <div id="mypage" data-aos="zoom-in" class="d-flex flex-column">
    <div>
      <update-info></update-info>
    </div>
    <div class="row" style="position:relative;">
    <follow-search class="ml-3"></follow-search>
    <follow-list style="position:absolute; left:50%" :followed="followed" :follower="follower" :user="user"></follow-list>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import UpdateInfo from '@/components/mypage/UpdateInfo.vue'
import FollowList from '@/components/mypage/FollowList.vue'
import FollowSearch from '@/components/mypage/FollowSearch.vue'
import SearchRes from '@/components/mypage/SearchRes.vue'
export default {

  components : {
    UpdateInfo,
    FollowSearch,
    FollowList,
    SearchRes
  },

  data(){
    return{
    }
  },

  computed:{
    ...mapState(["user", "followed", "follower"])
  }
}
</script>

<style>


#mypage{
  position: absolute;
  width : 1100px;
  height: 800px;
  background-color: white;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
}

</style>