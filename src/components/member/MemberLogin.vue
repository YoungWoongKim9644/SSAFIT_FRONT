<template>
  <div class="container">
    <h2>로그인</h2>
    <div class="m-4">
      <b-form-group label="id" label-for="input-1">
        <b-form-input id="input-1" v-model="user.id" trim></b-form-input>
      </b-form-group>
      <b-form-group label="pw" label-for="input-2">
        <b-form-input id="input-2" v-model="user.pw" trim></b-form-input>
      </b-form-group>
      <b-button variant="outline-success" @click="login">로그인</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        pw: "",
      },
    };
  },
  methods: {
    login() {
      // console.log(this.$route.query.call);
      this.$store.dispatch("userLogin", {
        user: this.user,
        call: this.$route.query.call,
      });
    },
  },
};
</script>

<style></style>
