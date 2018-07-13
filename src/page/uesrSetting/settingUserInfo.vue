<template>
    <div class="fillcontain">
        
        <div class="table_container" :style="{'height':this.height-150+'px'}">
          <el-form :model="form" :rules="rules2" ref="form"  label-width="150px">
            <div class="content">
                <h4>企业基本信息修改</h4>
                <div class="last">
                   
                      <el-form-item label="机构名称">
                        <span>北京现在支付</span>
                      </el-form-item>
                      <el-form-item label="所属行业"  prop="industry">
                        <el-select v-model="form.industry" placeholder="请选择活动区域">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="统一社会信用代码"  prop="comNum">
                        <el-input v-model="form.comNum"></el-input>
                      </el-form-item>
                      <el-form-item label="注册资金（元）"  prop="capital">
                        <el-input v-model="form.capital"></el-input>
                      </el-form-item>
                      <el-form-item label="营业期限"  prop="comNum">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date"></el-date-picker>
                      </el-form-item>
                      <el-form-item label="单位注册地址"  prop="comNum">
                        <el-input v-model="form.address"></el-input>
                      </el-form-item>
                      <el-form-item label="经营地址"  prop="comNum">
                        <el-input v-model="form.address2"></el-input>
                      </el-form-item>
                      <el-form-item label="邮政编码"  prop="comNum">
                        <el-input v-model="form.postalCode"></el-input>
                      </el-form-item>
                      <el-form-item label="机构联系电话"  prop="comNum">
                        <el-input v-model="form.phone"></el-input>
                      </el-form-item>
                      <el-form-item label="营业执照"  prop="comNum">
                        <el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card" class="avatar-uploader">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                      </el-form-item>
                </div>
            </div>
            <div class="content">
                <h4>法定代表人信息</h4>
                <div class="last">
                      <el-form-item label="法定代表人姓名">
                        <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="证件类型"  prop="industry">
                        <el-select v-model="form.industry" placeholder="请选择活动区域">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="证件号码"  prop="comNum">
                        <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="证件有效期"  prop="capital">
                        <el-date-picker
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="证件扫描件"  prop="comNum">
                        <span class="tip">原件照片、扫描件或者复印件加盖企业公章后的扫描件，支持jpg.png.pdf格式，大小不超过20M）</span>
                      </el-form-item>
                      <el-form-item label=""  prop="comNum">
                        <el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card" class="avatar-uploader">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                      </el-form-item>
                </div>
            </div>
            <div class="content">
                <h4>经办人信息<span class="yellor">经办人信息将用于企业电子签章的申请和使用，请谨慎填写。</span></h4>
                <div class="last">
                      <el-form-item label="经办人姓名">
                        <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="证件类型"  prop="industry">
                        <el-select v-model="form.industry" placeholder="请选择活动区域">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="证件号码"  prop="comNum">
                        <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="证件有效期"  prop="capital">
                        <el-date-picker
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="上传授权书"  prop="comNum">
                        <span class="tip">(企业用户点击下载《法人授权委托书》模版，盖章后上传原件照片、扫描件、支持jpg.png.pdf格式，大小不超过20M）</span>
                      </el-form-item>
                      <el-form-item label=""  prop="comNum">
                        <el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card" class="avatar-uploader">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                      </el-form-item>
                </div>
            </div>
            <div class="t-c mgt-20">
              <el-button type="primary">提交</el-button>
            </div>
          </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      fileList: [],
      form: {
        industry: "",
        comNum: "",
        capital: "",
        date: "",
        address: "",
        address2: "",
        postalCode: "",
        phone: ""
      },
      rules2: {
        industry: [
          { required: true, message: "该选项为必填项", trigger: "blur" }
        ],
        comNum: [
          { required: true, message: "该选项为必填项", trigger: "blur" }
        ],
        capital: [
          { required: true, message: "该选项为必填项", trigger: "blur" }
        ],
        date: [{ required: true, message: "该选项为必填项", trigger: "blur" }],
        address: [
          { required: true, message: "该选项为必填项", trigger: "blur" }
        ],
        address2: [
          { required: true, message: "该选项为必填项", trigger: "blur" }
        ],
        postalCode: [
          { required: true, message: "该选项为必填项", trigger: "blur" }
        ],
        phone: [{ required: true, message: "该选项为必填项", trigger: "blur" }]
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
    cancel() {}
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
  overflow-y: auto;

  .content {
    width: 100%;
    margin-bottom: 20px;
    h4 {
      background: #ebeef8;
      border: 1px solid #dce2e4;
      padding: 0 20px;
      padding-right: 10px;
      line-height: 40px;
      button {
        margin-top: 4px;
      }
    }
    > div {
      border: 1px solid #dce2e4;
      padding: 20px;
    }
  }
  form {
    .el-input,
    .el-date-editor,
    .el-select {
      width: 220px;
    }
    .tip{
      color: #999;
    }
    .yellor{
      color: #FF7F22;
      font-weight: normal;
      margin-left: 20px;
    }
  }
}
</style>

