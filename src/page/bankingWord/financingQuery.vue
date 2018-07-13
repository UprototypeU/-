<template>
    <div class="financingQuery" :style="{'min-height':heigh-150+'px'}">
        <p class="title mgt-15 fl">待受理融资的资产列表</p>
            <div class="search fr">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in selectOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-input :placeholder="userType[0]" v-model="searchText" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
                </el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
                <el-table-column prop="finaNumber" label="融资项目编号" align="center"></el-table-column>
                <el-table-column prop="orderNumber" label="应付账款编号" align="center"></el-table-column>
                <el-table-column prop="company" label="受理企业" align="center"></el-table-column>
                <el-table-column prop="payMoney" label="应收账款金额（元）" align="center"></el-table-column>
                <el-table-column prop="otMoney" label="融资金额（元）" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                       <span class="readdetail" @click="queryDetail">查看</span>
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
      userType: ["受理银行名称", "申请企业名称"],
      searchText: "",
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
      tableData: [
        {
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
      this.$router.push("/financingDetail");
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.financingQuery {
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
