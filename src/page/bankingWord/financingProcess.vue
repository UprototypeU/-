<template>
    <div class="financingProcess" :style="{'min-height':heigh-150+'px'}">
        <p class="title mgt-15 fl">待受理融资的资产列表</p>
            <div class="search fr">
                <el-input placeholder="核心企业名称" v-model="searchText" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
                </el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column type="index"  label="序号" width="70" align="center"> </el-table-column>
                <el-table-column prop="finaNumber" label="融资项目编号" align="center"></el-table-column>
                <el-table-column prop="orderNumber" label="应付账款编号" align="center"></el-table-column>
                <el-table-column prop="company" label="申请企业" align="center"></el-table-column>
                <el-table-column prop="payMoney" label="应收账款金额(元)" align="center"></el-table-column>
                <el-table-column prop="otMoney" label="融资金额(元)" align="center"></el-table-column>
                <el-table-column prop="status" label="融资利率" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                       <span class="readdetail" @click="queryDetail">受理</span>
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
      searchText: "",
      tableData: [
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },{
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
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
      this.$router.push("/financingProcessDetail");
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.financingProcess {
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
