<template>
  <div class="bg">
    <nav-bar class="nav-bar">
      <div slot="center">快速注册</div>
    </nav-bar>
    <child-login/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import childLogin from './childProfile/childLogin.vue'
  import logined from './childProfile/logined.vue'
  export default {
    name: "Profile",
    components: {
      NavBar,
      childLogin,
      logined
    },
    data() {
      return {

      }
    }

  }
      
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
  .center {
    color: #fff;
  }


</style>
