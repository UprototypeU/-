<template>
    <div class="fillcontain regSuc">
        <div class="table_container">
            <h3>***，恭喜您成功激活了在贸易金融平台的企业账户</h3>
            <p>还需要花一点时间完善您的企业信息</p>
            <p><span class="blue">2018年8月20日</span>之前未完成企业信息登记将需要重新注册账户</p>
            <h4><span>什么要登记企业信息？</span></h4>
            <div class="img-box">
              <dl>
                <dt class="iconfont icon-shenfengzheng2"></dt>
                <dd>核实真实信息</dd>
              </dl>
               <dl>
                <dt class="iconfont icon-anquan"></dt>
                <dd>保障账户安全</dd>
              </dl>
               <dl>
                <dt style="font-size:30px;" class="iconfont icon-hezuo1"></dt>
                <dd>获得合作企业信任</dd>
              </dl>
               <dl>
                <dt style="font-size:30px;" class="iconfont icon-gengduo"></dt>
                <dd>拓展更多功能</dd>
              </dl>
            </div>
            <p><el-button type="primary" style="width:240px;margin-top:40px; " @click="gologin">返回登陆界面</el-button></p>
        </div>
    </div>
</template>

<script>
import loginSider from "../../components/loginSider";
export default {
  data() {},
  components: {
    loginSider
  },
  created() {},
  methods: {
    gologin() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.regSuc {
  background: url(../../assets/img/login-bj.png) center center no-repeat;
}
.table_container {
  .wh(800px,600px);
  .ctp(800px,600px);
  background: #fff;
  box-sizing: border-box;
  padding: 70px 100px 0;
  line-height: 2.4em;
  text-align: center;
  .img-box {
    font-size: 0;
    padding-top: 30px;
    dl {
      width: 25%;
      font-size: @fs-two;
      display: inline-block;
      dt {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        font-size: 35px;
        color: #646464;
      }
    }
  }
  .f22 {
    font-size: 22px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 30px;
    text-align: center;
  }
  h4 {
    margin-top: 40px;
    border-bottom: 1px solid #e2e2e2;
    height: 10px;
    margin-bottom: 40px;
    span {
      font-weight: normal;
      position: relative;
      top: -8px;
      display: inline-block;
      background: #fff;
      padding: 0 20px;
    }
  }
  a {
    color: #4a6cd5;
  }
  .blue {
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


