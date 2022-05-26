<template >
    <div>
    <button class="btn btn-primary mt-5 ml-5" @click="modeChanger()" v-show="!mode"> 개인 정보 수정하기 </button>
    <div data-aos="fade-down"  class="float-left ml-5 mt-5 kkk" style="max-width: 60rem" v-show="mode">
  <form action=""  style="width: 600px">
          <div>
          <label for="id">아이디</label>
            <input class="form-control" type="text" id="id" v-model="user.id">
          </div>

          <div>
          <label for="pw">비밀번호</label>
            <input class="form-control" type="password" id="pw" v-model="user.pw">
          </div>
        </form>
        
        <button style="margin-top: 20px" class="btn btn-secondary" @click="modeChanger()">수정하기</button>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

    data(){
        return{
            mode : false
        }
    },

    methods:{
        modeChanger(){
            this.mode = !this.mode
            console.log(this.mode)
        }
    },

     computed:{
    ...mapState(["user"])
  }

};
</script>

<style>

.kkk{
  padding: 0.8rem;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;   /* 부드러운 모션을 위해 추가*/

}

.kkk:hover{
    box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
  z-index: 99;
}

</style>