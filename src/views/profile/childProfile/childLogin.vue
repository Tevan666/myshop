<template>
  <div class="login">
    <el-form class="form" ref="formRef" :model="Info">
      <el-input
      type="text"
      placeholder="请输入手机号或用户名"
      v-model="Info.phone"
      maxlength="11"
      show-word-limit
      clearable
      class="admin input-with-select"
    >
    </el-input>

    <el-input placeholder="请输入密码" v-model="Info.password" show-password class="password">
       <template slot="append">忘记密码</template>
    </el-input>
    <div @click="ifChecked" class="IfChecked">
      <el-button type="danger" round class="login-btn" :disabled="!checked" @click="login">
      登 录
      </el-button>
    </div>
    <el-divider content-position="left" class="other-login">
      <p>其他登陆方式</p>
    </el-divider>
    <div class="opts">
      <a href="#">
        <img src="~assets/img/profile/qq.png" alt="">
        <p>QQ</p>
      </a>
      <a href="#">
        <img src="~assets/img/profile/wechat.png" alt="">
        <p>微信</p>
      </a>
      <a href="#">
        <img src="~assets/img/profile/ios.png" alt="">
        <p>苹果</p>
      </a>

    </div>
    <el-checkbox v-model="checked" class="deatil"> 登录即代表您已同意 用户隐私政策</el-checkbox>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "childLogin",
    data() {
      return {
        Info: {
          phone: '',
          password: '',
        },
        select: '',
        fit:'scale-down',
        checked: false,
        disabled: true
        }
    },
    methods: {
      ifChecked() {
        if(this.checked === false) {
          this.$notify({
          message: '请先阅读并同意协议',
          type: 'warning',
          offset: 20
        });
        }
      },
      login() {
        let _this = this;
        if(this.Info.phone === '' || this.Info.password === '') {
          this.$notify({
          title: '错误',
          message: '手机号或密码不能为空',
          offset: 20
        });
        } else {
          const res = this.$http.post(
            'login',{username: this.Info.phone, password: this.Info.password}
            ).then ((res) => {
              if(res.data.meta.status === 200){
              //弹出登陆成功
                this.$notify({
                title: '登陆成功',
                offset: 20,
                type: 'success',
                duration: 1000
              });
              //登陆成功后，路由跳转到首页
                setTimeout(() => {
                  this.$router.replace('/logined');
                }, 1000);
                console.log(res.data.data.token);
                //token只在当前页面打开期间生效。将token保存在sessionStorage
                window.sessionStorage.setItem("token", res.data.data.token);
              }else {
                this.$notify.error({
                title: res.data.meta.msg,
                offset: 20,
                duration: 1000
              });
              }
            })
        }
      },
    }
  }
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: none;
    flex-wrap: wrap;
    margin-top: 50px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: none;
    flex-wrap: wrap;
    width: 100%;
  }
  .login .admin {
    width: 85%;
  }
  .login .password {
    width: 85%;
    margin-top: 20px;
  }
  .IfChecked {
    touch-action: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .login-btn {
    margin-top: 20px;
    width: 80%;
  }
  .other-login {
    margin-top: 100px;
  }
  p {
    color: rgba(0, 0, 0, 0.4);
  }
  .opts{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .opts a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 69px;
  }
  .opts img {
    height: 75%;
    width: 75%;
  }
  .opts p {
    margin-top: 10px;
    font-size: 12px;
  }

</style>
