<template>
      <div>
    <div class="container">
    <form action="#">
  <b-card
    style="width: 50rem;"
    class="mt-3 mx-3 mb-3"
  >
    <b-card-body>
      <b-card-title>게시글 등록</b-card-title>
      <b-card-text>
        <b-form-input id="input-1" v-model="title" trim></b-form-input>
      </b-card-text>
      <b-card-title>내용</b-card-title>
      <textarea class="form-control" v-model="contents" rows="15" cols="100"  id="content"/>
    </b-card-body>
    <b-button @click="createBoard" class="mx-4 btn btn-secondary btn-sm">등록하기</b-button>
    <button @click="cancel" class="mx-4 btn btn-secondary btn-sm float-right">취소</button>
  </b-card>
    </form>
    </div>
</div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "BoardCreate",
  data() {
    return {
      title: "",
      contents: ""
    };
  },
  methods: {
    createBoard() {
      let newBoard = {
        id: this.user.id,
        title: this.title,
        contents: this.contents
      }
      this.$store.dispatch('createBoard', newBoard)
      router.push({name : 'boardList'})
    },
    cancel() {
      this.$router.push({name : 'boardList'})
    }
  },
  computed:{
      ...mapState(['user','videos'])
  }
};
</script>

<style></style>
