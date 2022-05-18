<template>
  <div>

      <h2>회원가입 페이지</h2>
      <form action="">
        
        <label for="id">아이디</label>
        <input type="text" id="id">

        <label for="pw">비밀번호</label>
        <input type="password" id="pw">
        
        <label for="email">이메일</label>
        <input type="text" id="email">

        <label for="phone">휴대폰</label>
        <input type="text" id="phone">
      </form>
      <button>등록</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

form {
  flex-direction: column;
}

</style>