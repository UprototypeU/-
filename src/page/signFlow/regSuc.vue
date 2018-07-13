<template>
    <div class="fillcontain regSuc">
        <div class="table_container">
            <h3>注册成功</h3>
            <p class="f22">请登录验证邮箱，完成账号激活。</p>
            <p>如果没有收到，请检查垃圾邮件。</p>
            <p><el-button type="primary" style="width:100%;margin-top:40px;" @click="$router.push('activatingSuc')">点击进入邮箱</el-button></p>
            <p class="to-login">已有账号？ <router-link to="/">点此登录</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
  data() {},
  components: {
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.regSuc {
  background: url(../../assets/img/login-bj.png) center center no-repeat;
}
.table_container {
  .wh(750px,500px);
  .ctp(750px,500px);
  background: #fff;
  box-sizing: border-box;
  padding: 70px 200px 0;
  line-height: 2.4em;
  .f22 {
    font-size: 22px;
  }
  h3 {
    font-size: 22px;
    color: #4a6cd5;
    margin-bottom: 30px;
    text-align: center;
  }
  a {
    color: #4a6cd5;
  }
  .to-login {
    margin-top: 50px;
    padding-top: 30px;
    text-align: center;
    border-top: 1px solid #e1e1e1;
  }
}
</style>


