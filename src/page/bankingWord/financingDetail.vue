<template>
   <div class="financingDetail">
        <div class="box">
            <h4 class="title">应收账款基础信息</h4>
            <div class="content">
                <p><label>融资项目编号</label> <span>12312321321</span></p>
                <p><label>应收账款编号</label> <span>12312321321</span></p>
                <p><label>供应商</label> 
                  <el-popover
                    placement="bottom"
                    title="现在支付集团"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      userType: ["受理银行名称", "申请企业名称"],
      searchText: "",
      dialogVisible:false,
      dialogVisible2:false,
      img:'http://img11.360buyimg.com/n1/s450x450_jfs/t21919/241/747937502/94289/7ac19af8/5b165329N287cb803.jpg',
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
      tableData: Array.apply(null, { length: 10 }).map(function() {
        return {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        };
      })
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.financingDetail {
  padding: 20px 30px;
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
  .file-w{
    overflow: hidden;
    padding: 30px 0;
    span{
      display: block;
      width: 44%;
      background: #F4F4F4;
      border: 1px solid #DCE2E4;
      line-height: 80px;
      color: #4A6CD5 ;
      font-size: @fs-one;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      i{
        margin-right: 10px;
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
    .d-file-w{
    padding: 0 10px;
    h3{
      margin-bottom: 10px;
      padding-left: 1.5%;
      color: #000;
      >i{
        font-weight: 400;
        font-size: 12px;
        color: #646464;
      }
    }
    .bd{
      overflow: hidden;
      font-size: 0;
      padding: 10px 0;
      dl{
        display: inline-block;
        width: 30%;
        margin: 0 1.5%;
        font-size: @fs-two;
        text-align: center;
        line-height: 40px;
        dt{
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          text-align: left;
          padding: 15px 8px;
          p{
            line-height: 30px;
            i{
              font-size: 12px;
            }
          }
          .iconfont{
            margin-top: 20px;
            font-size: 80px;
            width: 100%;
            height: 80px;
            line-height: 80px;
            text-align: right;
          }
        }
        img{
          width: 100%;
        }
        dd{
          margin-top: 20px;
          i{
            color: #ff7f22;
          }
        }
      }
    }
  }
}
</style>
