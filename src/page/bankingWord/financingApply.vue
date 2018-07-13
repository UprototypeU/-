<template>
    <div class="financingApply" :style="{'min-height':heigh-150+'px'}">
        <p class="title mgt-15 fl">应收账款确认列表</p>
            <div class="search fr">
                <el-input placeholder="核心企业名称" v-model="searchText" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
                </el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
                <el-table-column prop="orderNumber" label="应付账款编号" align="center"></el-table-column>
                 <el-table-column prop="payMoney" label="应收账款金额（元）" align="center"></el-table-column>
                <el-table-column prop="company" label="核心企业" align="center"></el-table-column>
                <el-table-column prop="pDate" label="应付账款到期日" align="center"></el-table-column>
                <el-table-column prop="qfDate" label="签发日期" align="center"></el-table-column>
                <el-table-column prop="date" label="确认日期" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                       <span class="readdetail" @click="queryDetail">申请</span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagewp">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
            </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      heigh: "",
      userType: ["核心企业名称"],
      searchText: "",
      tableData: [
        {
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },{
          payMoney: 123234,
          orderNumber: "2341232341212334",
          company: "我是供应商",
          pDate: "2018-09-24",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        }
      ]
    };
  },
  components: {},
  created() {},
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    queryDetail() {
      this.$router.push("/financingApplyDetail");
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.financingApply {
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
  .pagewp {
    margin-top: 20px;
    text-align: right;
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
