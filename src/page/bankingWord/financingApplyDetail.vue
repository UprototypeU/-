<template>
   <div class="financingDetail">
        <div class="box">
            <h4 class="title">应收账款基础信息</h4>
            <div class="content">
                <p><label>融资项目编号</label> <span>12312321321</span></p>
                <p><label>应收账款编号</label> <span>12312321321</span></p>
                <p><label>供应商</label>
                  <el-popover placement="bottom" title="现在支付集团" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <span class="link" slot="reference">我是供应商</span>
                  </el-popover>
                </p>
                <p><label>核心企业</label>
                  <el-popover
                    placement="bottom"
                    title="现在支付集团"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <span class="link" slot="reference">我是企业</span>
                  </el-popover>
                </p>
                <p><label>应收账款总金额</label> <span>12312321321</span></p>
                <p><label>应收账款到期日</label> <span>12312321321</span></p>
                <p><label>期限</label> <span>90天</span></p>
                <p><label>状态</label> <span>申请待受理</span></p>
                <p><label>备注</label> <span>申请待受理</span></p>

            </div>
        </div>
        <div class="file-w">
          <span class="fl" @click="dialogVisible=true"><i class="iconfont icon-hetong"></i>贸易合同</span>
          <span class="fr" @click="dialogVisible2=true"><i style="font-size:24px;" class="iconfont icon-xieyixinxi"></i>协议附件</span>
        </div>
        <div class="box">
            <h4 class="title">填写融资信息</h4>
            <div class="content">
              <p class="group"><label>融资项目编号</label><span>12312321321</span></p>
              <p class="group"><label>选择融资银行</label><span><el-select placeholder="输入银行名称，支持模糊搜索" value="0"><el-option key="o" value="0" label="0"></el-option></el-select></span></p>
              <p class="group"><label>融资比例</label><span><el-input placeholder="按线下约定的比例填写"></el-input></span></p>
              <p class="group"><label>融资金额</label><span>133213</span></p>
              <p class="group"><label>融资利率</label><span><el-input placeholder="按线下约定的利率填写"></el-input></span></p>
              <p class="group"><label>融资手续费（元）</label><span><el-input placeholder="按线下约定的费用填写"></el-input></span></p>
              <p class="group"><label>利息收取方式</label><span><el-select placeholder="输入银行名称，支持模糊搜索" value="0"><el-option key="o" value="0" label="0"></el-option></el-select></span></p>
            </div>
        </div>
        <div class="box">
            <h4 class="title">选择收款银行信息</h4>
            <div class="content">
              <p class="group"><label>银行开户名</label><span><div class="borde" @click="dialogVisible1 = true">点击选择</div></span></p>
              <p class="group"><label>银行账号</label><span><div class="borde" @click="dialogVisible1 = true">点击选择</div></span></p>
              <p class="group"><label>开户行名称</label><span><div class="borde" @click="dialogVisible1 = true">点击选择</div></span></p>
              <p class="group"><label>开户行行号</label><span><div class="borde" @click="dialogVisible1 = true">点击选择</div></span></p>
            </div>
        </div>
        <div class="btn-box el-col-21">
            <el-button type="primary" plain>临时保存</el-button>
            <el-button plain @click="$router.history.go(-1)">取消</el-button>
            <el-button type="primary" @click="hrefApply()">下一步</el-button>
        </div>
        <!-- 弹窗区域 -->
        <el-dialog title="贸易合同" :visible.sync="dialogVisible" width="50%">
          <div class="d-file-w">
            <h3>融资证明文件 <i>点击即可预览文件内容</i></h3>
            <div class="bd">
              <dl><dt><img :src="img" /></dt><dd>决议书</dd></dl>
              <dl><dt><img :src="img" /></dt><dd>工商信息查询报告</dd></dl>
              <dl><dt><img :src="img" /></dt><dd>企业征信报告</dd></dl>
            </div>
          </div>
        </el-dialog>
        <el-dialog title="协议附件" :visible.sync="dialogVisible2" width="50%">
          <div class="d-file-w">
            <h3>已签订文件</h3>
            <div class="bd">
              <dl>
                <dt>
                  <p>文档编号：<i>Z24325324543324</i></p>
                  <p>签章编号：<i>Z24325324543324</i></p>
                  <p>签章企业：<i>qq</i></p>
                  <p>签章类型：<i>签章</i></p>
                  <p>签章时间：<i>1902-10-20</i></p>
                  <i class="iconfont icon-weiqianzhang"></i>
                </dt><dd>《应收帐款确认函》<i class="iconfont icon-tishi"></i></dd>
              </dl>
              <dl>
                <dt>
                  <p>文档编号：<i>Z24325324543324</i></p>
                  <p>签章编号：<i>Z24325324543324</i></p>
                  <p>签章企业：<i>qq</i></p>
                  <p>签章类型：<i>签章</i></p>
                  <p>签章时间：<i>1010-10-10</i></p>
                  <i class="iconfont icon-weiqianzhang"></i>
                </dt><dd>《应收帐款确认函》<i class="iconfont icon-tishi"></i></dd>
              </dl>
            </div>
          </div>
        </el-dialog>
        <el-dialog title="选择银行账户" :visible.sync="dialogVisible1" width="60%">
          <el-table ref="multipleTable" :data="tableData3" style="width: 100%" @row-click="pitch">
            <!-- <el-table-column type="selection" width="55"></el-table-column> -->
            <el-table-column align="center">
              <template slot-scope="scope">
                  <el-radio v-model="radio2" :label="scope.$index">{{null}}</el-radio>
              </template>
            </el-table-column>
            <el-table-column prop="date" align="center" label="业务类型"></el-table-column>
            <el-table-column prop="name" align="center" label="账户用途"></el-table-column>
            <el-table-column prop="name" align="center" label="银行账户名"></el-table-column>
            <el-table-column prop="name" align="center" label="银行账号"></el-table-column>
            <el-table-column prop="name" align="center" label="开户行名称"></el-table-column>
            <el-table-column prop="address" label="开户行号" align="center"></el-table-column>
          </el-table>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userType: ["受理银行名称", "申请企业名称"],
      searchText: "",
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      img:
        "http://img11.360buyimg.com/n1/s450x450_jfs/t21919/241/747937502/94289/7ac19af8/5b165329N287cb803.jpg",
      selectOptions: [
        {
          label: "申请待受理",
          value: "1"
        },
        {
          label: "待放款",
          value: "2"
        },
        {
          label: "到期待还本金",
          value: "3"
        },
        {
          label: "融资成功",
          value: "4"
        },
        {
          label: "融资失败",
          value: "6"
        }
      ],
      radio2: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市"
        }
      ]
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    hrefApply() {
      this.$router.push("/signatureDisposeDetail");
    },
    pitch(row, event, column) {
      // console.log(row);
      // console.log(event);
      // this.radio2 = 1;
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.financingDetail {
  padding: 20px 30px;
  padding-bottom: 100px;
  font-size: @fs-two;
  color: #333;
  .box {
    line-height: 50px;
    margin-bottom: 20px;
    .title {
      color: #000;
      font-size: @fs-one;
      background-color: #ebeef8;
      padding-left: 30px;
      border: 1px solid #dce2e4;
      border-bottom: none;
      span {
        font-size: @fs-two;
        color: #ff7f22;
        letter-spacing: 0;
        text-align: left;
        margin-left: 10px;
      }
    }
    .content {
      padding: 25px 30px;
      border: 1px solid #dce2e4;
      font-size: 0;
      p {
        display: inline-block;
        width: 50%;
        font-size: @fs-two;
        &.group {
          display: block;
          width: 100%;
          .borde{
            width: 380px;
            height: 20px;
            line-height: 20px;
            padding: 10px;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            color: #606266;
          }
        }
      }
      label {
        display: inline-block;
        width: 11em;
        color: #000;
        font-weight: bold;
      }
      span {
        display: inline-block;
        width: 36%;
        &.link {
          color: #4a6cd5;
          cursor: pointer;
        }
      }
    }
  }
  .file-w {
    overflow: hidden;
    padding: 30px 0;
    span {
      display: block;
      width: 44%;
      background: #f4f4f4;
      border: 1px solid #dce2e4;
      line-height: 80px;
      color: #4a6cd5;
      font-size: @fs-one;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      i {
        margin-right: 10px;
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
  .d-file-w {
    padding: 0 10px;
    h3 {
      margin-bottom: 10px;
      padding-left: 1.5%;
      color: #000;
      > i {
        font-weight: 400;
        font-size: 12px;
        color: #646464;
      }
    }
    .bd {
      overflow: hidden;
      font-size: 0;
      padding: 10px 0;
      dl {
        display: inline-block;
        width: 30%;
        margin: 0 1.5%;
        font-size: @fs-two;
        text-align: center;
        line-height: 40px;
        dt {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          text-align: left;
          padding: 15px 8px;
          p {
            line-height: 30px;
            i {
              font-size: 12px;
            }
          }
          .iconfont {
            margin-top: 20px;
            font-size: 80px;
            width: 100%;
            height: 80px;
            line-height: 80px;
            text-align: right;
          }
        }
        img {
          width: 100%;
        }
        dd {
          margin-top: 20px;
          i {
            color: #ff7f22;
          }
        }
      }
    }
  }
  .btn-box {
    line-height: 80px;
    height: 80px;
    text-align: center;
    box-shadow: 6px 2px 8px 6px rgba(39, 60, 128, 0.23);
    position: fixed;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
  }
  
}
</style>

<style lang="less">
.financingDetail {
  input {
    width: 400px;
  }
  .el-dialog__footer{
    text-align: center;
    button{
      width:140px;
    }
  }
}
</style>