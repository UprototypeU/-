<template>
            <div class="disposeDetail" :style="{'min-height':heigh-150+'px'}">
                <h4>签章文件 <router-link to="/liabilitiesQueryDetail" class="fr">签章详情</router-link></h4>
                <div class="last">
                    <ul>
                        <li>
                            <div>
                                <p>《应收帐款确认函》
                                    <el-tooltip class="item" effect="dark" content="移动鼠标到此图标上弹出显示文档的说明" placement="top-start">
                                        <i class="iconfont icon-tishi"></i>
                                    </el-tooltip>
                                </p>
                                <div class="form">
                                    <p>文档编号：Z24325324543324</p>
                                    <p>签章编号：</p>
                                    <p>签章企业：</p>
                                    <p>签章类型：</p>
                                    <p>签章时间：</p>
                                    <i class="iconfont icon-yiqianzhang"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="btn">
                    <el-button plain @click="$router.history.go(-1)">放弃</el-button>
                    <el-button type="primary" @click="verify()">签章</el-button>
                </div>

                <el-dialog title="签章" :visible.sync="centerDialogVisible" width="30%" center>
                    <span>您的签章方式是手机号验证签章</span>
                    <div class="dialog-body">
                        <p class="test">
                            <label>手机号</label>
                            <el-input class="" placeholder="请输入手机号" v-model="verifyData.phone" clearable></el-input>
                            <el-button type="primary" class="">发送验证码</el-button>
                        </p>
                        <p class="test1">
                            <label>验证码</label>
                            <el-input placeholder="请输入验证码" v-model="verifyData.verify" clearable> </el-input>
                        </p>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
          
</template>

<script>
export default {
  data() {
    return {
      heigh: "",
      centerDialogVisible: false,
      verifyData: {
        phone: "",
        verify: ""
      }
    };
  },
  components: {},
  created() {},
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    verify() {
      this.centerDialogVisible = true;
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.disposeDetail {
  background-color: #fff;
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding-right: 45px;
  h4 {
    background: #ebeef8;
    border: 1px solid #dce2e4;
    padding: 0 20px;
    line-height: 40px;
    border-bottom: 0;
    >a{
      color: #4A6CD5;
      font-size: 14px;
    }
  }
  .last {
    border: 1px solid #dce2e4;
    ul {
      overflow: hidden;
      li {
        width: 350px;
        box-sizing: border-box;
        display: inline-block;
        padding: 20px 40px;
        text-align: center;
        font-size: @fs-one;
        > div > p > i {
          color: #ff7f22;
        }
        .form {
          margin-top: 30px;
          background: #ffffff;
          border-radius: 2px;
          box-shadow: 0 0 5px #ccc;
          text-align: left;
          padding: 25px;
          > p {
            line-height: 40px;
            font-size: @fs-two;
          }
          > i {
            font-size: 80px;
            width: 100%;
            overflow: hidden;
            text-align: right;
          }
        }
      }
    }
  }
  .btn {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    > button {
      width: 140px;
    }
  }
  .dialog-body {
    margin-top: 40px;
    > p {
      > label {
        width: 10%;
      }
      input,
      button {
        height: 35px;
        line-height: 35px;
      }
      button {
        width: 30%;
        padding: 0 10px;
      }
    }
    .test {
      .el-input {
        width: 50%;
        input {
          width: 100%;
        }
      }
    }
    .test1 {
      margin-top: 20px;
      .el-input {
        width: 81%;
      }
    }
  }
}
</style>
