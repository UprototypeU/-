<template>
    <div class="myInfoCentre" :style="{'min-height':heigh-150+'px'}">
        <div class="title fl">
            <span :class="spanActive==1?'active':''" @click="spanActive = 1">未读</span>
            <span :class="spanActive==2?'active':''" @click="spanActive = 2">全部</span>
             <el-select v-model="value" placeholder="标记为">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="fr">
            <el-button type="danger" plain @click="back()">返回</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="orderNumber" label="当前状态" align="center"></el-table-column>
            <el-table-column label="消息标题" align="center">
                <template slot-scope="scope">
                    <a class="infoAlter" href="javascript:void(0);" @click="dialogVisible1 = true">{{ scope.row.payMoney }}</a>
                </template>
            </el-table-column>
            <el-table-column prop="company" label="发信人" align="center"></el-table-column>
            <el-table-column prop="pDate" label="消息内容" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="qfDate" label="发送时间" align="center"></el-table-column>
        </el-table>
        <div class="pagewp">
            <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
        </div>
        <!-- 弹窗 -->
        <el-dialog title="消息详情" :visible.sync="dialogVisible1" width="40%">
            <h4><i class="iconfont icon-guanyuwomen_pingtai_dianziqianzhang"></i>您有一个新的债券转让通知</h4>
            <div class="alterBody">
                <p><label>消息通知方</label><span>供应商002</span></p>
                <p><label>通知时间</label><span>2018-02-04 19：22:11</span></p>
                <p><label>消息内容</label><span>供应商002发送了个路过路过路过路过了撸管</span></p>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      heigh: "",
      spanActive: 1,
      dialogVisible1: false,
      tableData: [
        {
          payMoney: "消息标题出",
          orderNumber: "2",
          company: "我是供应商",
          pDate:
            "我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },
        {
          payMoney: "消息标题出",
          orderNumber: "3",
          company: "我是供应商",
          pDate:
            "我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },
        {
          payMoney: "消息标题出",
          orderNumber: "1",
          company: "我是供应商",
          pDate:
            "我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        },
        {
          payMoney: "消息标题出",
          orderNumber: "3",
          company: "我是供应商",
          pDate:
            "我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商我是供应商",
          qfDate: "2018-09-25",
          date: "2018-09-25"
        }
      ],
      options: [
        {
          value: "1",
          label: "未读"
        },
        {
          value: "2",
          label: "已读"
        }
      ],
      value: ""
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
    },
    back(){
      this.$emit("headCallBack", false);
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.myInfoCentre {
  position: relative;
  font-size: @fs-two;
  padding: 20px 45px 60px 20px;
  box-sizing: border-box;
  .title {
    font-size: @fs-one;
    margin-bottom: 20px;
    > span {
      float: left;
      width: 60px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      border: 1px solid #dce2e4;
      border-radius: 3px;
      font-size: 14px;
      cursor: pointer;
    }
    .el-select {
      width: 160px;
      height: 26px;
      margin-left: 20px;
      input {
        width: 160px;
        height: 26px;
        line-height: 26px;
      }
      .el-input__icon {
        line-height: 26px;
      }
    }
    .active {
      color: #fff;
      background-color: #4a6cd5;
      border-color: #4a6cd5;
    }
  }
  .infoAlter {
    color: #4a6cd5;
  }
  .readdetail {
    color: @mc;
    cursor: pointer;
  }
  .pagewp {
    position: absolute;
    right: 45px;
    bottom: 10px;
    margin-top: 20px;
    text-align: right;
  }
  .el-dialog__body {
    padding: 0;
    line-height: 50px;
    h4 {
      background-color: #f0f3f8;
      padding-left: 30px;
      color: #000;
      i {
        color: #4a6cd5;
        margin-right: 5px;
        font-weight: 400;
      }
    }
    .alterBody {
      padding: 15px 40px 40px 60px;
      label {
        width: 20%;
        display: inline-block;
        font-weight: 700;
        color: #000;
      }
    }
  }
}
</style>
