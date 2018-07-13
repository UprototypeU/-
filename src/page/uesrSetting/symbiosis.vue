<template>
    <div class="settingAccount" :style="{'min-height':heigh-150+'px'}">
        <p class="title mgt-15 fl">放款账单列表</p>
        <div class="search fr">
          <el-button type="primary" class="fr" @click="dialogVisible = true;">新建合作关系</el-button>
          <el-select class="fr mgr-10" v-model='queryData' @change="query"><el-option v-for="item in options" :label="item.value" :value="item.key" :key="item.key"></el-option></el-select>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
            <el-table-column prop="finaNumber" label="合作关系" align="center"></el-table-column>
            <el-table-column prop="orderNumber" label="申请企业" align="center"></el-table-column>
            <el-table-column prop="company" label="受理企业" align="center"></el-table-column>
            <el-table-column prop="payMoney" label="申请时间" align="center"></el-table-column>
            <el-table-column prop="otMoney" label="受理时间" align="center"></el-table-column>
            <el-table-column prop="status" label="状态" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <span class="readdetail" @click="userEnit('支付登记', scope.row)" v-if="scope.row.enit=='处理'">处理</span>
                <span class="readdetail" @click="userEnit('查看', scope.row)" v-if="scope.row.enit=='查看'">查看</span>
              </template>
            </el-table-column>
        </el-table>
        <div class="pagewp">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>

        <!-- 新增修改-->
          <el-dialog title="新增合作关系" :visible.sync="dialogVisible" width="50%">
            <div id="add">
              <p>
                <label>受理企业</label>
                <el-input placeholder="搜索合作关系企业名称"></el-input>
              </p>
              <p>
                <label>合作关系</label>
                <el-select v-model="addData.link">
                  <el-option v-for="item in links" :key="item.key" :value="item.key" :label="item.value"></el-option>
                </el-select>
              </p>
              <p>
                <label>合作产品</label><span class="content">应收帐款融资</span></p>
              <p>
                <label>附件</label>
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                  multiple :limit="3">
                  <el-button class="el-button el-button--primary is-plain"><i class="el-icon-plus"></i> 点击上传</el-button>
                </el-upload>
              </p>
              <p>
                <label></label>
                <span class="content"><span class="img"><img src="" alt="" /></span></span>
              </p>
              <p class="btns">
                <el-button @click="dialogVisible = false;">返回</el-button>
                <el-button type="primary" @click="submit">提交</el-button>
              </p>
            </div>
          </el-dialog>
          
        <!-- 受理查看-->
          <el-dialog
          title="受理/查看合作关系"
          :visible.sync="dialogVisible1"
          width="30%">
          <div id="show">
            <p><label>申请企业</label><span class="content">是申请企业名称</span></p>
            <p><label>合作关系</label><span class="content">是申请企业名称</span></p>
            <p><label>合作产品</label><span class="content">是申请企业名称</span></p>
            <p><label>状态</label><span class="content">是申请企业名称</span></p>
            <p><label>申请时间</label><span class="content">是申请企业名称</span></p>
            <p><label>附件</label><span class="content"><span class="img"><img src="" alt=""></span></span></p>
            <p class="btns" v-if="showData.id">
              <el-button @click="dialogVisible = false;">拒绝</el-button>
              <el-button type="primary" @click="submit">同意</el-button>
            </p>
          </div>
        </el-dialog>
      </div>
</template>
<script>
export default {
  data() {
    return {
      heigh: "",
      tableData: [
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "处理"
        },
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "查看"
        },
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "处理"
        },
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "查看"
        },
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "处理"
        },
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "处理"
        },
        {
          finaNumber: "供需关系",
          orderNumber: "10,000,000.00",
          company: "8,000,000.00",
          payMoney: "2018-08-01 19:21:30",
          otMoney: "2018-08-01 19:21:30",
          status: "已合作",
          enit: "查看"
        }
      ],
      queryData: "0",
      options: [{ key: "0", value: "待签章" }, { key: "1", value: "已签章" }],
      links: [{ key: "0", value: "供需关系" }],
      dialogVisible: false,
      dialogVisible1: false,
      addData: { link: "0" },
      showData: { id: "" }
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
    submit() {
      this.dialogVisible1 = false;
      this.$message({
        message: '提交成功',
        type: 'success'
      });
    },
    userEnit(v, i) {
      if (v == "查看") {
        this.showData.id = false;
        this.dialogVisible1 = true;
      } else {
        this.dialogVisible1 = true;
        this.showData.id = true;
      }
      console.log(v);
      console.log(i);
    }
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
      .upload-demo {
        width: 30%;
        display: inline-block;
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
    width: 75%;
    margin: 0 auto;
    overflow: hidden;
    p {
      width: 100%;
      float: left;
      margin: 20px 0;
      label {
        display: inline-block;
        width: 40%;
        color: #000000;
        font-weight: 700;
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
}
</style>
