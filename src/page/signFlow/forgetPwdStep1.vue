<template>
    <div class="fillcontain register">
        <div class="table_container">
            <h3>忘记密码</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="uesr">
                    <el-input type="text" placeholder="请输入用户名" v-model="ruleForm.user" auto-complete="off"></el-input>
                </el-form-item>
              
                <el-form-item prop="email">
                    <el-input type="password" placeholder="请输入您的邮箱" v-model="ruleForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item style="margin-top:40px;">
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">确认</el-button>
                </el-form-item>
            </el-form>
            <p class="to-login"><router-link to="/">返回登陆</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      ruleForm: {
        email: "",
        user: ""
      },
      rules: {
        uesr: [{ require: true, trigger: "blur" }],
        email: [{ require: true, trigger: "blur" }]
      }
    };
  },
  components: {
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          // this.$router.push("/forgetPwdStep2");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.register {
  background: url(../../assets/img/login-bj.png) center center no-repeat;
}
.table_container {
  .wh(750px,500px);
  .ctp(750px,500px);
  background: #fff;
  box-sizing: border-box;
  padding: 70px 220px 0;
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


