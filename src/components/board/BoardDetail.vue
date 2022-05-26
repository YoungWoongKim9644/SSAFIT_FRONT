<template>
  <!-- <div>
    <h3>게시글 상세보기</h3>
    <div class="m-4">

      <b-form-group label="제목" label-for="input-1">
        <b-form-input id="input-1" trim :value="board.title" readonly></b-form-input>
      </b-form-group>
      <b-form-group label="작성자" label-for="input-2">
        <b-form-input id="input-2" trim :value="board.writer" disabled></b-form-input>
      </b-form-group>
      <b-form-group label="내용" label-for="textarea">
        <b-form-textarea id="textarea" :value="board.content"></b-form-textarea>
      </b-form-group>
      <div class="mx-3">
        <button class="btn btn-success btn-sm mr-1" @click="updateBoard()">수정</button>
        <button class="btn btn-danger btn-sm " @click="deleteBoard()">삭제</button>
        <button class="btn btn-secondary btn-sm float-right" @click="$bvModal.hide('update')">취소</button>
        </div>
    </div>
  </div> -->
 <div>
    <div class="container">
    <form action="#">
  <b-card
    style="width: 50rem;"
    class="mt-3 mx-3 mb-3"
  >
    <b-card-body>
      <b-card-title>게시글 상세보기</b-card-title>
      <b-card-text>
        <b-form-input id="input-1" trim :value="board.title" readonly></b-form-input>
      </b-card-text>
      <b-card-title>내용</b-card-title>
      <b-form-textarea id="textarea" :value="board.content"></b-form-textarea>
    </b-card-body>
      <div class="mx-3">
        <button class="btn btn-success btn-sm mr-1" @click="updateBoard()">수정</button>
        <button class="btn btn-danger btn-sm " @click="deleteBoard()">삭제</button>
        <button class="btn btn-secondary btn-sm float-right" @click="$bvModal.hide('update')">취소</button>
        </div>
  </b-card>
    </form>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BoardDetail",
  computed: {
    ...mapState(["board"])
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    // console.log(pathName)
    const id = pathName[pathName.length - 1];
    this.$store.dispatch("getBoard", id);
  },
  methods: {
    moveUpdate() {
      this.$router.push({ name: "boardUpdate" });
    },
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.board.id);
    }
  }
};
</script>

<style></style>
