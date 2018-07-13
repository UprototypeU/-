<template>
    <div class="apyCheck" :style="{'min-height':heigh-150+'px'}">
        <div class="content" v-if="back == 'capitalCheck' || back == 'creditCheck' || back == 'interestCheck'">
            <h4>融资信息 <a class="fr" @click="equitFlag = !equitFlag">{{equitFlag?'隐藏':'展开'}}</a></h4>
            <el-collapse-transition>
            <div class="last" v-show="equitFlag">
                <ul>
                    <li><span>供应商</span><span>我是供应商</span></li>
                    <li><span>银行</span><span>我是银行</span></li>
                    <li><span>核心企业</span><span>我是核心企业</span></li>
                    <li><span>应收账款总金额（元）</span><span>¥ 1,500,000 拾伍万元整</span></li>
                    <li><span>融资金额（元）</span><span>¥ 1,500,000 拾伍万元整</span></li>
                    <li><span>融资利率</span><span>5%</span></li>
                    <li><span>融资利息（元）</span><span>15,000</span></li>
                    <li><span>利息收取方式</span><span>到期一次性收取</span></li>
                </ul>
            </div>
            </el-collapse-transition>
        </div>

        <div class="content" v-if="back == 'receivableCheck'"> 
            <h4>应付账款信息</h4>
            <div class="last">
                <ul>
                    <li><span>应付账款编号</span><span>JA01201805060700010</span></li>
                    <li><span></span><span></span></li>
                    <li><span>供应商</span><span>我是供应商</span></li>
                    <li><span>核心企业</span><span>我是核心企业</span></li>
                    <li><span>应付账款总金额（元）</span><span>30,000.00 叁万元整</span></li>
                    <li><span>应付账款到期日</span><span>2019年12月30日</span></li>
                </ul>
            </div>
        </div>

        <div class="content" v-if="back == 'receivableCheck'">
            <div class="last" style="border:0;">
                <ul class="regAlter">
                    <li style="padding-left:0;">
                        <p @click="dialogVisible = true"><i class=""></i>贸易背景及证明材料</p>
                    </li>
                    <li style="padding-right:0;">
                        <p @click="dialogVisible = true"><i class=""></i>融资文件</p>
                    </li>
                </ul>
            </div>
        </div>
         
         <div class="content" v-if="back == 'interestCheck'"> 
            <h4>融资利息账单信息</h4>
            <div class="last">
                <ul>
                    <li><span>应付金额</span><span>¥ 1,000,000 拾万元整</span></li>
                    <li><span></span><span></span></li>
                    <li><span>付款单位</span><span>上海通华保理有限公司</span></li>
                    <li><span>收款单位</span><span>武汉光华贸易有限公司</span></li>
                    <li><span>计息天数</span><span>10</span></li>
                    <li><span></span><span></span></li>
                    <li><span>计息日期</span><span>2017-09-01</span></li>
                    <li><span>结息日期</span><span>2017-09-01</span></li>
                    <li><span>出账日</span><span>2017-09-01</span></li>
                    <li><span>支付状态</span><span>待支付</span></li>
                </ul>
            </div>
        </div>
        <div class="content" v-if="back == 'capitalCheck' || back == 'creditCheck' || back == 'receivableCheck'">
            <h4 v-if="back == 'capitalCheck'">放款信息账单</h4>
            <h4 v-if="back == 'creditCheck'">融资本金账单信息</h4>
            <h4 v-if="back == 'receivableCheck'">应付账款兑付账单信息</h4>
            <div class="last">
                <ul>
                    <li><span>应付金额</span><span>¥ 1,000,000 拾万元整</span></li>
                    <li><span></span><span></span></li>
                    <li><span>付款单位</span><span>付款单位名称</span></li>
                    <li><span>收款单位</span><span>收款单位名称</span></li>
                    <li><span>出账日</span><span>2017-09-01</span></li>
                    <li><span>支付状态</span><span>待支付/支付成功</span></li>
                </ul>
            </div>
        </div>

        <div class="content" v-if="back == 'capitalCheck' || back == 'creditCheck' || back == 'receivableCheck' || back == 'interestCheck'">
            <h4>收款方银行账户信息</h4>
            <div class="last">
                <ul>
                    <li><span>银行开户名</span><span>我是银行开户名</span></li>
                    <li><span>银行账号</span><span>6222023602057179970</span></li>
                    <li><span>开户行</span><span>6222 8000 7532 9652</span></li>
                    <li><span>开户行号</span><span>10058552</span></li>
                </ul>
            </div>
        </div>

        <div class="content" v-if="back == 'capitalCheck' || back == 'creditCheck' || back == 'receivableCheck' || back == 'interestCheck'">
            <h4>收付款信息</h4>
            <div class="last">
                <ul>
                    <li><span>支付方式</span><span>线下支付</span></li>
                    <li><span>付款银行账号</span><span>6222023602057179970</span></li>
                    <li><span>付款日期</span><span>2017-06-10</span></li>
                    <li><span>收款日期</span><span>2017-06-08</span></li>
                    <li><span>付款凭证单号</span><span>GQU43234DAS346321</span></li>
                    <li class="accImg"><span>付款凭证附件</span><span><img  :src="img" alt=""></span></li>
                </ul>
            </div>
        </div>

        <div class="content" style="text-align: center">
            <el-button type="danger" plain @click="check()">关闭</el-button>
        </div>
        <!-- 弹窗区域 -->
         <el-dialog
          title="贸易背景及证明材料" :visible.sync="dialogVisible" width="50%">
          <div class="d-file-w">
            <h3>已签订的文件</h3>
            <div class="bd">
              <dl>
                <dt><img :src="img" /></dt>
                <dd>材料1</dd>
              </dl>
              <dl>
                <dt><img :src="img" /></dt>
                <dd>材料1</dd>
              </dl>
              <dl>
                <dt><img :src="img" /></dt>
                <dd>材料1</dd>
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
      heigh: "",
      back: "",
      dialogVisible: false,
      img:
        "http://img11.360buyimg.com/n1/s450x450_jfs/t21919/241/747937502/94289/7ac19af8/5b165329N287cb803.jpg",
      equitFlag:false
    };
  },
  props: ["backData"],
  components: {},
  created() {
    let s = this.backData;
    this.back = s;
  },
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    check() {
      this.$emit("headCallBack", false);
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";

.apyCheck {
  background-color: #fff;
  width: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  .content {
    width: 100%;
    margin-bottom: 20px;
    h4 {
      background: #ebeef8;
      border: 1px solid #dce2e4;
      padding: 0 20px;
      line-height: 40px;
      font-size: @fs-one;
      >a{
        color: #4A6CD5;
        cursor: pointer;
      }
    }
    > button {
      width: 140px;
    }
    .last {
      border: 1px solid #dce2e4;
      border-top: 0;
      ul {
        overflow: hidden;
        font-size: @fs-two;
        padding: 20px;
        li {
          float: left;
          padding: 0 30px;
          width: 50%;
          height: 35px;
          line-height: 35px;
          box-sizing: border-box;
          > span:first-child {
            width: 30%;
            display: inline-block;
            font-weight: 700;
          }
        }
        .accImg {
          height: 140px;
          img {
            height: 140px;
            width: 80px;
            vertical-align: top;
          }
        }
      }
      .regAlter {
        padding: 0;
        box-sizing: border-box;
        > li {
          text-align: center;
          color: #4a6cd5;
          height: 60px;
          line-height: 60px;
          > p {
            background-color: #f4f4f4;
            width: 100%;
            height: 58px;
            line-height: 58px;
            display: inline-block;
            border: 1px solid #dce2e4;
            cursor: pointer;
          }
        }
      }
    }
  }
  .d-file-w {
    padding: 0 20px 20px;
    h3 {
      font-weight: normal;
      margin-bottom: 20px;
      padding-left: 1.5%;
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
        img {
          width: 100%;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
</style>


