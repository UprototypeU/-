<template>
    <div class="liabilitiesQuery" :style="{'min-height':heigh-150+'px'}">
        <div class="statistics">
          <div class="card">
            <span>已开具</span>
            {{statisDate[0]}}元
          </div>
          <div class="card">
            <span>到期兑付</span>
            {{statisDate[1]}}元
          </div>
        </div>
        <div class="fliter">
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
        <div class="tb-ct">
            <el-table :data="tableData" style="width: 100%" border>
               <el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
                <el-table-column prop="finaNumber" label="应付账款编号" align="center"></el-table-column>
                <el-table-column prop="orderNumber" label="签发金额（元）" align="center"></el-table-column>
                <el-table-column prop="company" label="核心企业" align="center"></el-table-column>
                <el-table-column prop="payMoney" label="应付账款到期日" align="center"></el-table-column>
                <el-table-column prop="otMoney" label="签发时间" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                       <span class="readdetail" @click="queryDetail">查看</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
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
      statisDate: [10000, 200000],
      userType: ["供应商", "核心企业"],
      searchText: "",
      selectOptions: [
        {
          label: "签发待确认",
          value: "1"
        },
        {
          label: "签发已确认",
          value: "2"
        },
        {
          label: "已提交融资",
          value: "3"
        },
        {
          label: "到期待兑付",
          value: "4"
        },
        {
          label: "已作废",
          value: "5"
        },
        {
          label: "已兑付",
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
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },
        {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        },
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
      this.$router.push("/liabilitiesQueryDetail");
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.liabilitiesQuery {
  position: relative;
  padding-bottom: 60px;
  box-sizing: border-box;
  .pagewp {
    position: absolute;
    right: 45px;
    bottom: 10px;
  }
  .statistics {
    padding: 20px 0;
    margin-bottom: 20px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    .card {
      position: relative;
      width: 400px;
      line-height: 110px;
      font-size: 28px;
      color: #ff922b;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      display: inline-block;
      margin: 0 40px;
      border-radius: 6px;
      &:last-child {
        color: #4a6cd5;
        span {
          background-color: #4a6cd5;
        }
      }
      span {
        position: absolute;
        width: 70px;
        text-align: center;
        line-height: 30px;
        background: #ff922b;
        left: 0;
        top: 0;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .fliter {
    & > div {
      margin-right: 20px;
    }
    overflow: hidden;
    .input-with-select {
      width: 240px;
    }
  }
  .search {
    margin-bottom: 20px;
    font-size: 0;
    display: inline-block;
    input,
    button {
      border-radius: 0;
      vertical-align: top;
    }
    .el-input {
      width: 200px;
    }
  }
  .tb-ct {
    padding-right: 45px;
    margin-top: 20px;
    .readdetail {
      color: #369;
      cursor: pointer;
    }
  }
}
</style>
