<template>
    <div class="liabilitiesAffirm" :style="{'min-height':heigh-150+'px'}">
      <p class="title mgt-15 fl">应收账款确认列表</p>
      <div class="search fr">
          <el-input placeholder="核心企业名称" v-model="searchText" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
          </el-input>
      </div>
      <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index"  label="序号" width="70" align="center"></el-table-column>
          <el-table-column prop="finaNumber" label="应付账款编号" align="center"></el-table-column>
          <el-table-column prop="orderNumber" label="签发金额(元)" align="center"></el-table-column>
          <el-table-column prop="company" label="核心企业" align="center"></el-table-column>
          <el-table-column prop="payMoney" label="应收账款到期日" align="center"></el-table-column>
          <el-table-column prop="otMoney" label="签发时间" align="center"></el-table-column>
          <el-table-column label="状态"  align="center">
            <template slot-scope="scope">
                <span :style="'color:'+(scope.row.status=='已签发待确认'?'green':'')">{{scope.row.status}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                  <span class="readdetail" @click="deal('处理', scope.row)" v-if="scope.row.enit==1">处理</span>
                  <span class="readdetail" @click="deal('查看', scope.row)" v-if="scope.row.enit==2">查看</span>
              </template>
          </el-table-column>
      </el-table>
      <div class="pagewp">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
          status: "已签发待确认",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发待确认",
          enit: "2"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发待确认",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发待确认",
          enit: "2"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发待确认",
          enit: "1"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "已签发待确认",
          enit: "2"
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
    deal(is, data) {
      if (is === "查看") {
        this.$router.push("/liabilitiesQueryDetail");
      } else {
        this.$router.push("/liabilitiesAffirmDeal");
        // this.$router.push("/");
      }
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.liabilitiesAffirm {
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
