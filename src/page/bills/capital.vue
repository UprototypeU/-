<template>
    <div class="billsCapital" :style="{'min-height':heigh-150+'px'}">
      <div v-if="!backData">
        <p class="title mgt-15 fl">放款账单列表</p>
        <div class="search fr">
            <el-select v-model='queryData' @change="query" placeholder="请选择">
                <el-option v-for="item in options" :label="item.value" :value="item.key" :key="item.key"></el-option>
            </el-select>
        </div>
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="finaNumber" label="账单编号" align="center"></el-table-column>
            <el-table-column prop="orderNumber" label="应付账款编号" align="center"></el-table-column>
            <el-table-column prop="company" label="应付账款金额（元）" align="center"></el-table-column>
            <el-table-column prop="payMoney" label="融资金额（元）" align="center"></el-table-column>
            <el-table-column prop="otMoney" label="付款单位" align="center"></el-table-column>
            <el-table-column prop="otMoney1" label="收款单位" align="center"></el-table-column>
            <el-table-column prop="status" label="状态" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="readdetail" @click="hrefBills('支付登记', scope.row)" v-if="scope.row.enit==1">支付登记</span>
                    <span class="readdetail" @click="hrefBills('查看', scope.row)" v-if="scope.row.enit==2">查看</span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagewp">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
      
      <apy-register :backData = "backData" v-if="backData == 'capitalReg'" v-on:headCallBack="headCall"></apy-register>
      <apyCheck :backData = "backData" v-if="backData == 'capitalCheck'" v-on:headCallBack="headCall"></apyCheck>
    </div>
</template>

<script>
import apyCheck from "./commonApyCheck";
import apyRegister from "./commonApyRegister";
export default {
  data() {
    return {
      tableData: [
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "待支付",
          enit: "1" //支付登记
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "已支付",
          enit: "2" //查看
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "支付成功",
          enit: "1" //支付登记
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "待支付",
          enit: "1" //支付登记
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "已支付",
          enit: "2" //查看
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "支付成功",
          enit: "1" //支付登记
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "待支付",
          enit: "1" //支付登记
        },
        {
          finaNumber: "2341232351234",
          orderNumber: "2341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          otMoney1: 1230345,
          status: "已支付",
          enit: "2" //查看
        }
      ],
      queryData: "2",
      options: [
        { key: "2", value: "全部" },
        { key: "0", value: "未支付" },
        { key: "1", value: "支付成功" }
      ],
      heigh: "",
      backData: ""
    };
  },
  components: {
    apyRegister,
    apyCheck
  },
  created() {
  },
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    headCall: function(msg) {
      //回调方法，接收子组件传的参数
      this.backData = msg
    },

    queryDetail() {},
    query() {
      console.log(this.queryData);
    },
    hrefBills(is, data) {
      if (is === "支付登记") {
        this.backData = "capitalReg";
      } else {
        this.backData = "capitalCheck";
      }
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.billsCapital {
  position: relative;
  font-size: @fs-two;
  padding: 20px 45px 60px 20px;
  box-sizing: border-box;
  .title {
    font-size: @fs-one;
  }
  .el-input {
    width: 240px;
  }
  .search {
    margin-bottom: 20px;
  }
  .readdetail {
    color: @mc;
    cursor: pointer;
  }
  .pagewp {
    position: absolute;
    right: 45px;
    bottom: 10px;
  }
}
</style>
