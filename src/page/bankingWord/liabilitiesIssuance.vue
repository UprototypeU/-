<template >
  <div class="liabilitiesIssuance">
      <el-form>
          <h3 class="title">应收账款信息</h3>
          <div class="form-box">
              <div class="group">
                  <label>应付账款编号</label>
                  <span>系统自动生成</span>
              </div>
              <div class="group">
                  <label>核心企业</label>
                  <span>我是核心企业</span>
              </div>
              <div class="group">
                  <label>供应商</label>
                  <el-select v-model="formData.sup" placeholder="请选择供应商(支持模糊搜索)">
                      <el-option v-for="item in options"
                          :key="item.value"
                          :label="item.name"
                          :value="item.value">
                      </el-option>
                  </el-select>
              </div>
              <div class="group">
                  <label>应付账款总额(元)</label>
                  <el-input v-model="formData.num" placeholder="请输入金额"></el-input>
              </div>
              <div class="group">
                  <label>应付账款到期日</label>
                  <el-date-picker v-model="formData.time" type='date' ></el-date-picker>
              </div>
              <div class="group">
                  <label>备注</label>
                  <el-input type='textarea' v-model="formData.mark" placeholder="多行输入" :rows="4"></el-input>
              </div>
          </div>
          <h3 class="title">供货商银行信息</h3>
          <div class="form-box">
              <div class="group">
                  <label>银行开户名</label><el-input v-model="formData1.name" placeholder="请填写"></el-input>
              </div>
              <div class="group">
                  <label>银行账号</label><el-input v-model="formData1.account" placeholder="请填写"></el-input>
              </div>
              <div class="group">
                  <label>开户行名称</label><el-input v-model="formData1.user" placeholder="请填写"></el-input>
              </div>
              <div class="group">
                  <label>开户行行号</label><el-input v-model="formData1.num" placeholder="请填写"></el-input>
              </div>
          </div>
          <div class="btn-box el-col-21">
              <el-button plain>暂存</el-button>
              <el-button plain>取消</el-button>
              <el-button type="primary" @click="hrefDispose()">下一步</el-button>
          </div>
      </el-form>

  </div>
</template>

<script>
// import "../../config/regex.js";
export default {
  data() {
    return {
      value: "",
      formData: {
        //应收账款信息
        time: "",
        sup: "",
        mark: "",
        num: ""
      },
      formData1: {
        //供货商银行信息
        account: "64236488642132100",
        name: "北京支行",
        user: "北京天安门支行",
        num: "553478"
      },
      options: [
        //供应商信息
        {
          value: "1",
          name: "比亚迪"
        }
      ]
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    regex: function() {},
    hrefDispose(){
        this.$router.push("/signatureDisposeDetail");
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.liabilitiesIssuance {
  padding-left: 20px;
  padding-right: 40px;
  font-size: @fs-two;
  padding-bottom: 100px;
  .title {
    font-size: @fs-one;
    line-height: 40px;
    padding-left: 20px;
    background-color: #ebeef8;
    color: #000;
    border: 1px solid #c8c8c8;
    border-bottom: 0;
  }
  .form-box {
    border: 1px solid #c8c8c8;
    padding: 20px;
    margin-bottom: 20px;
    .group {
      line-height: 40px;
      // font-size: 0;
      label {
        font-size: 14px;
        display: inline-block;
        width: 200px;
        vertical-align: top;
      }
      span {
        font-size: @fs-two;
      }
      .el-select input {
        height: 30px;
        line-height: 30px;
        width: 400px;
      }
      .el-input {
        width: auto;
      }
      .el-textarea {
        width: 400px;
      }
    }
  }

  .btn-box {
    line-height: 65px;
    height: 65px;
    text-align: center;
    box-shadow: 6px 2px 8px 6px rgba(39, 60, 128, 0.23);
    position: fixed;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
  }
}
</style>
<style>
.liabilitiesIssuance input {
  width: 400px;
  line-height: 30px;
  height: 30px;
}
</style>