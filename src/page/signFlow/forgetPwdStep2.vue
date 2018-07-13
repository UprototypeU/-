<template>
    <div class="fillcontain forgetPwdStep2">
        <div class="table_container">
            <h3>修改密码</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="pass">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" placeholder="请输入新的密码" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" placeholder="请再次输入新的密码" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;margin-top:40px;">确认</el-button>
                </el-form-item>
            </el-form>
            <p class="to-login"><router-link to="/forgetPwdStep1">返回</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass1 = (rule, value, callback) => {
      if (this.ruleForm.user) {
        callback();
      } else {
        callback(new Error("请输入正确的用户名"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (this.ruleForm.checked) {
        callback();
      } else {
        callback(new Error("必须勾选!"));
      }
    };
    return {
      value1: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        user: "",
        checked: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        uesr: [{ validator: validatePass1, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        type: [{ validator: validatePass3, trigger: "change" }]
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
          alert("submit!");
          this.$router.push("signFlowFirmApprove");
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
.forgetPwdStep2 {
  background: url(../../assets/img/login-bj.png) center center no-repeat;
}
.table_container {
  .wh(750px,550px);
  .ctp(750px,550px);
  background: #fff;
  box-sizing: border-box;
  padding: 70px 220px 0;
  h3{
     font-size: 22px;
      color: #4a6cd5;
      margin-bottom: 30px;
      text-align: center;
  }
  a{
    color: #4a6cd5;
  }
  .to-login{
    margin-top: 50px;
    padding-top: 30px;
    text-align: center;
    border-top: 1px solid #e1e1e1;
  }
}
</style>


