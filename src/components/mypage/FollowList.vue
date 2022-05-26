<template>
<div>
  <b-card no-body class="float-left ml-5 mt-5 kkk">
    <b-tabs card>
      <b-tab title="나를 팔로우 한 사람들" active>
        <b-card-text>내 팔로워 목록

            <div v-for="(item, index) in followed" :key="index">
                <li>{{item}}</li>
            </div>

        </b-card-text>
      </b-tab>
      <b-tab title="내가 팔로우한 사람들">
        <b-card-text>내 팔로잉 목록

            <div v-for="(item, index) in follower" :key="index">
              <div class="d-flex justify-content-between mt-1 mr-2">
                <li >{{item}}</li>
                <button class="btn-sm btn-success" id="unfollow" @click="unFollow(item)"><strong>Following</strong></button>
                </div>
            </div>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
  </div>
</template>
      
<script>

export default {

  methods:{
    unFollow(item){
      if(confirm("언팔로우 하시겠습니까?")){
        this.$store.dispatch("unFollow", {followerId : this.user.id, followedId: item})
      }
    }
  },

  props: {
      followed : Array,
      follower : Array,
      user : Object
  },

  mounted(){
      console.log(this.followed)
  }

}
</script>

<style>
.kkk:hover{
    box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.2);
}

#unfollow:hover{
  transition-duration: 0.5s;
  background-color: rgb(173, 65, 65);
  border-color:brown
}
</style>