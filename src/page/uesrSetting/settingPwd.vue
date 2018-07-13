<template>
    <div class="fillcontain">
        <div class="table_container" :style="{'height':this.height-150+'px'}">
            <el-form :model="form" :rules="rules2" ref="form"  label-width="80px">
              <el-form-item label="原始密码"  prop="pwd">
                <el-input v-model="form.pwd"></el-input>
              </el-form-item>
              <el-form-item label="新密码"  prop="newpwd">
                <el-input v-model="form.newpwd"></el-input>
              </el-form-item>
              <el-form-item label="确认密码"  prop="checkPass">
                <el-input v-model="form.checkPass"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="cancel">取消</el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      height: null,
      form: {
        pwd: "",
        newpwd: "",
        checkPass: ""
      },
      rules2: {
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
        newpwd: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  components: {},
  created() {},
  mounted() {
    this.height = document.documentElement.clientHeight;
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel(){
      this.$emit("headCallBack", false);
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.table_container {
  background-color: #fff;
  width: 100%;
  height: 100%;
  font-size: @fs-two;
  box-sizing: border-box;
  padding: 20px 40px;
  form {
    .el-input {
      width: 220px;
    }
  }
}
</style>
