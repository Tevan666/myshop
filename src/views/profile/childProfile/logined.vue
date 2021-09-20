<template>
  <div>
    <h2>登录啦哈哈哈</h2>
    <button @click="logout">退出</button>
  </div>
</template>

<script>
export default {
  name: 'logined',
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/profile');
  }
  }
}
</script>

<style scoped>

</style>