<template>
    <div class="dispose" :style="{'min-height':heigh-150+'px'}">
        <p class="title mgt-15 fl">电子签章列表</p>
            <div class="search fr">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in selectOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column  label="" width="50" align="center">
                    <template slot-scope="scope"><el-checkbox type="checkbox"></el-checkbox></template>
                </el-table-column>
                <el-table-column prop="finaNumber" label="签章任务编号" align="center"></el-table-column>
                <el-table-column prop="orderNumber" label="签章类型" align="center"></el-table-column>
                <el-table-column prop="company" label="申请时间" align="center"></el-table-column>
                <el-table-column prop="payMoney" label="最新操作时间" align="center"></el-table-column>
                <el-table-column prop="otMoney" label="签章人" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                       <span class="readdetail" @click="queryDetail">查看</span>
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
      value: "",
      selectOptions: [
        {
          label: "待签章",
          value: "1"
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
      this.$router.push("/signatureDisposeCheck");
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.dispose {
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
