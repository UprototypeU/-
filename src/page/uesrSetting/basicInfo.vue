<template>
    <div>
        <div class="signature" :style="{'height':heigh-150+'px'}"  v-if="!isTrue">
            <div class="content">
                <h4>账户信息
                    <!-- <a href="javascript:;" class="fr">电子签章申请须知</a> -->
                </h4>
                <div class="last">
                    <ul>
                        <li><span>用户名</span><span>周柳</span></li>
                        <li><span>注册邮箱</span><span>baodger@server.com</span></li>
                        <li><span>所属企业</span><span>COO</span></li>
                        <li><span>角色</span><span>baodger@server.com</span></li>
                    </ul>
                    <div>
                        <el-button type="primary" class="fr" size="small" @click="editPwd">修改密码</el-button>
                    </div>
                </div>
            </div>
            <div class="content">
                <h4>企业信息</h4>
                <div class="last">
                    <ul>
                        <li><span>企业名称</span><span>周柳</span></li>
                        <li><span>统一社会信用代码</span><span>至 2026-08-09</span></li>
                        <li><span>认证状态</span><span>COO</span></li>
                        <li><span>认证到期日</span><span>baodger@server.com</span></li>
                    </ul>
                    <div>
                        <el-button type="primary" class="fr" size="small" @click="editUserInfo">身份信息修改</el-button>
                    </div>
                </div>
            </div>
        </div>
        <settingPwd v-if="isTrue" v-on:headCallBack="headCall"></settingPwd>
    </div>
</template>

<script>
import settingPwd from './settingPwd'
export default {
  data() {
    return {
      heigh: "",
      isTrue:false
    };
  },
  components: {
    settingPwd
  },
  created() {},
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    headCall(val){
      this.isTrue = val
    },
    editUserInfo() {
      this.$router.push("/settingUserInfo");
    },
    editPwd() {
      this.isTrue = true
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
@import "../../style/mixin";
.signature {
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .content {
    width: 100%;
    h4 {
      background: #ebeef8;
      border: 1px solid #dce2e4;
      padding: 0 20px;
      line-height: 40px;
    }
    .last {
        border: 1px solid #dce2e4;
        padding: 20px;
        border-top: 0;
        overflow: hidden;
      ul {
        overflow: hidden;
        width: 90%;
        float: left;
        li {
          float: left;
          padding: 0 30px;
          width: 50%;
          height: 35px;
          line-height: 35px;
          box-sizing: border-box;
          >span:first-child{
              width: 30%;
              display: inline-block;
          }
        }
      }
      >div{
        width: 10%;
        float: left;
        text-align: left;
        margin-top: 18px;
      }
    }
    margin-bottom: 20px;
  }
}
</style>
