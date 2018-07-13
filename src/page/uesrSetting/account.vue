<template>
    <div class="settingAccount" :style="{'min-height':heigh-150+'px'}">
        <p class="title mgt-15 fl">放款账单列表</p>
        <div class="search fr">
            <el-button type="primary" class="fr" @click="dialogVisible = true;">新增银行账户</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column  label="默认" width="55" align="center">
                <template slot-scope="scope"><el-checkbox type="checkbox"></el-checkbox></template>
            </el-table-column>
            <el-table-column prop="finaNumber" label="银行账号" align="center"></el-table-column>
            <el-table-column prop="orderNumber" label="开户行" align="center"></el-table-column>
            <el-table-column prop="company" label="状态" align="center"></el-table-column>
            <el-table-column prop="payMoney" label="最新更新时间" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <span class="readdetail tool mr" @click="dialogVisible = true;"><i class="el-icon-edit"></i>修改</span>
                  <span class="readdetail tool mr" @click="queryDetail"><i class="el-icon-delete"></i>删除</span>
                  <span class="readdetail tool" @click="dialogVisible1 = true;"><i class="el-icon-view"></i>查看</span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagewp">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>


          <!-- 新增修改-->
          <el-dialog title="银行账户新增／修改" :visible.sync="dialogVisible" width="50%">
            <div id="add">
              <p>
                <label>账户名称</label>
                <el-input placeholder="开户名"></el-input>
              </p>
              <p>
                <label>银行账号</label>
                <el-input placeholder="银行账号"></el-input>
              </p>
              <p>
                <label>开户行</label>
                <el-input placeholder="开户行"></el-input>
              </p>
              <p>
                <label>开户行地区和代码</label>
                <el-select placeholder="填写地区、自动带出地区代码" v-model="addData.code">
                  <el-option v-for="item in codes" :key="item.key" :value="item.key" :label="item.value"></el-option>
                </el-select>
              </p>
              <p>
                <label>开户行网点名称</label>
                <el-input placeholder="支行名称"></el-input>
              </p>
              <p>
                <label>开户行网点名称</label>
                <el-input placeholder=""></el-input>
              </p>
              <p>
                <label>状态</label>
                <el-select placeholder="" v-model="addData.status">
                  <el-option v-for="item in status" :key="item.key" :value="item.key" :label="item.value"></el-option>
                </el-select>
              </p>
              <p class="btns">
                <el-button @click="dialogVisible = false;">返回</el-button>
                <el-button type="primary" @click="addAccount">确定</el-button>
              </p>
            </div>
          </el-dialog>
         <!-- 查看-->
         <el-dialog title="银行账户查看" :visible.sync="dialogVisible1" width="50%">
          <div id="show" class="clear">
            <p><label>账户名称</label><span>核心企业</span></p>
            <p><label>银行账户</label><span>核心企业</span></p>
            <p><label>开户行</label><span>核心企业</span></p>
            <p><label>开户行地区名称</label><span>核心企业</span></p>
            <p><label>开户行地区代码</label><span>核心企业</span></p>
            <p><label>开户行网点名称</label><span>核心企业</span></p>
            <p><label>开户行行号</label><span>核心企业</span></p>
            <p><label>状态</label><span>核心企业</span></p>
          </div>
        </el-dialog>
      </div>
</template>
<script>
export default {
  data() {
    return {
      heigh: "",
      dialogVisible: false,
      dialogVisible1: false,
      tableData: [
        {
          finaNumber: "JA01201805060700010",
          orderNumber: "1,000,000.00",
          company: "启用",
          payMoney: "2018-08-06"
        },
        {
          finaNumber: "JA01201805060700010",
          orderNumber: "1,000,000.00",
          company: "启用",
          payMoney: "2018-08-06"
        },
        {
          finaNumber: "JA01201805060700010",
          orderNumber: "1,000,000.00",
          company: "启用",
          payMoney: "2018-08-06"
        }
      ],
      queryData: "0",
      options: [{ key: "0", value: "待签章" }, { key: "1", value: "已签章" }],
      codes: [{ code: "0", value: "code1" }],
      status: [{ key: "1", value: "启用" }],
      addData: { code: "0", status: "1" }
    };
  },
  components: {},
  created() {},
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    queryDetail() {},
    query() {
      console.log(this.queryData);
    },
    addAccount() {}
  },
  watch: {}
};
</script>


<style lang="less">
@import "../../style/mixin";
.settingAccount {
  position: relative;
  font-size: @fs-two;
  padding: 20px 45px 60px 20px;
  box-sizing: border-box;
  .title {
    font-size: @fs-one;
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
  #add {
    width: 80%;
    margin: 0 auto;
    > p {
      line-height: 36px;
      margin: 14px 0;
      label {
        width: 30%;
        display: inline-block;
        font-weight: 700;
        color: #000000;
      }
      > .el-input,
      > .el-select {
        width: 60%;
      }
      input {
        height: 30px;
      }
    }
    > .btns {
      text-align: center;
      margin-top: 30px;
      > button {
        width: 140px;
      }
    }
  }
  #show {
    width: 90%;
    margin: 0 auto;
    p {
      width: 50%;
      float: left;
      margin: 20px 0;
      label {
        display: inline-block;
        width: 40%;
        color: #000000;
        font-weight: 700;
      }
    }
  }
}
</style>
