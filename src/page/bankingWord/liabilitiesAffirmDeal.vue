<template>
    <div class="liabilitiesAffirmDeal" id="liabilitiesAffirmDeal">
        <div class="box">
            <h4 class="title">应收账款基础信息</h4>
            <div class="content">
                <p><label>应收账款编号</label> <span>12312321321</span></p>
                <p><label>供应商</label> <span>12312321321</span><label>核心企业</label> <span>12312321321</span></p>
                <p><label>应收账款总金额(元)</label> <span>12312321321</span><label>应收账款到期日</label> <span>12312321321</span></p>
                <p><label>期限</label> <span>12312321321</span></p>
                <p><label>备注</label> <span>12312321321</span></p>
            </div>
        </div>
        <div class="tip"><i class="el-icon-tickets"></i> 应收账款确认函</div>
        <div class="box">
            <h4 class="title">供应商银行信息</h4>
            <div class="content">
                <p><label>银行开户名</label> <span>12312321321</span><label>银行卡号</label> <span>12312321321</span></p>
                <p><label>开户行名称</label> <span>12312321321</span><label>开户行行号</label> <span>12312321321</span></p>
            </div>
        </div>
        <div class="box">
            <h4 class="title">填写应收账款明细 <span>开票含税金额总额: 12323</span></h4>
            <div class="content">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column width="70" label="">
                    <template slot-scope="scope"><el-checkbox type="checkbox"></el-checkbox></template>
                </el-table-column>
                <el-table-column type="index"  label="序号" width="70"></el-table-column>
                <el-table-column prop="finaNumber" label="发票类型">
                    <template slot-scope="scope">
                      <el-select value="0">
                        <el-option key="0" label="0" value="0"></el-option>
                      </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="orderNumber" label="发票代码">
                  <template slot-scope="scope">
                    <el-input placeholder="请输入"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="company" label="发票编号">
                  <template slot-scope="scope">
                    <el-input placeholder="请输入"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="payMoney" label="含税金额(元)">
                  <template slot-scope="scope">
                    <el-input placeholder="请输入"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="otMoney" label="不含税金额(元)">
                  <template slot-scope="scope">
                    <el-input placeholder="请输入"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="status" label="开票时间">
                  <template slot-scope="scope">
                    <el-date-picker type='date' ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column label="开票码(只普票填)">
                  <template slot-scope="scope">
                    <el-input placeholder="请输入"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="发票附件"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button class="el-icon-remove-outline"></el-button>
                    <el-button class="el-icon-circle-plus-outline"></el-button>
                  </template>
                </el-table-column>
              </el-table>
            <el-button type="primary" @click="uploadsVisible = true;">批量上传明细表</el-button>
            </div>
        </div>
        <div class="box">
            <h4 class="title">上传应收账款证明文件</h4>
            <div class="content">
                <p><label>应收账款证明文件</label></p>
                <p><label>贸易合同</label> <span>此处提交贸易合同/订单</span></p>
                <p><label></label>
                    <span><el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          multiple
                          :limit="3"
                          :on-exceed="handleExceed"
                          :file-list="fileList">
                          <el-button  class="el-button el-button--default is-plain"><i class="el-icon-plus"></i> 选择文件</el-button>
                        </el-upload>
                    </span>

                </p>
                <p><label></label><span class="imgs">
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>

                </span>
                </p>
                <p><label>其他证明文件</label> <span>此处提交其他证明文件</span></p>
                <p><label></label>
                    <span><el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          multiple
                          :limit="3"
                          :on-exceed="handleExceed"
                          :file-list="fileList">
                          <el-button  class="el-button el-button--default is-plain"><i class="el-icon-plus"></i> 选择文件</el-button>
                        </el-upload>
                    </span>
                </p>
                <p><label></label><span class="imgs">
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                    <span><img src="" alt="" /><el-button class="el-icon-error"></el-button></span>
                </span>
                </p>
            </div>
        </div>
        <div class="btn-box el-col-21">
            <el-button type="primary" plain>临时保存</el-button>
            <el-button plain @click="$router.history.go(-1)">拒绝确认</el-button>
            <el-button type="primary" @click="hrefDispose()">下一步</el-button>
        </div>
        <el-dialog title="批量上传明细表" :visible.sync="uploadsVisible" center class="dialog">
          <div class="dialog-tip">
            <p class="top">温馨提示：</p>
            <p>1. 点击下载 <a href="javascript:;">应收帐款明细表模版</a> ，填写应收帐款明细。</p>
            <p>2. 上传填写好的应收帐款明细表。</p>
            <p>3. 请勿修改文件模版。</p>
            <p>4. 导入后如果格式错误，系统会对错误进行标注，用户可对错误进行修改。</p>
            <p>
              <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList3">
              <el-input class="input-with-select">
                <el-button slot="append" type="primary">选择文件</el-button>
              </el-input>
            </el-upload>
            </p>
            <p class="dialog-btns">
              <el-button plain @click="uploadsVisible = false;">取消</el-button>
              <el-button type="primary" >确认</el-button>
            </p>
          </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: Array.apply(null, { length: 10 }).map(function() {
        return {
          finaNumber: "23412323412351234",
          orderNumber: "2341232341212334",
          company: "我是供应商",
          payMoney: 123123,
          otMoney: 1230345,
          status: "待受理"
        };
      }),
      fileList: [],
      fileList3: [],
      uploadsVisible: false
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    queryDetail() {},
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {},
    handleChange(){},
    hrefDispose() {
      this.$router.push("/signatureDisposeDetail");
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
@import "../../style/mixin";
.liabilitiesAffirmDeal {
  padding: 20px 40px;
  font-size: @fs-two;
  .box {
    line-height: 50px;
    margin-bottom: 20px;
    .title {
      color: #000;
      font-size: @fs-one;
      background-color: #ebeef8;
      padding-left: 30px;
      border: 1px solid #dce2e4;
      border-bottom: none;
      span {
        font-family: PingFangSC-Medium;
        font-size: @fs-two;
        color: #ff7f22;
        letter-spacing: 0;
        text-align: left;
        margin-left: 10px;
        .imgs {
          width: auto;
        }
      }
    }
    .content {
      padding: 25px 30px;
      border: 1px solid #dce2e4;
      label {
        display: inline-block;
        width: 12%;
        color: #000;
        font-weight: bold;
      }
      span {
        display: inline-block;
        width: 36%;
      }
    }
  }
  .tip {
    background: #f4f4f4;
    border: 1px solid #dce2e4;
    line-height: 80px;
    height: 80px;
    margin-bottom: 20px;
    color: #4a6cd5;
    text-align: center;
    font-size: @fs-one;
  }
  .btn-box {
    line-height: 80px;
    height: 80px;
    text-align: center;
    box-shadow: 6px 2px 8px 6px rgba(39, 60, 128, 0.23);
    position: fixed;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
  }
}
</style>
<style lang="less">
@import "../../style/mixin";
#liabilitiesAffirmDeal {
  padding: 20px 40px;
  padding-bottom: 100px;

  thead tr {
    line-height: 23px;
    height: 23px;
    background: #f4f4f4;
  }
  .cell {
    padding: 0;
    text-align: center;
    button{
      border: none;
      width: 14px;
      height: 14px;
      padding: 0;
    }
  }
  .el-table__header-wrapper {
    background: #f4f4f4;
  }
  .el-table__body-wrapper {
    input {
      height: 30px;
      line-height: 30px;
      width: 120px;
    }
  }
  .el-date-editor--date {
    width: 100%;
    margin-left: 20px;
  }
  .imgs {
    width: 1081px;
    span {
      width: 156px;
      height: 156px;
      margin-right: 20px;
      background: #f4f4f4;
      border: 2px solid #dfe2ed;
      vertical-align: top;
      position: relative;
      &:last-child {
        margin-right: 0;
      }
      button {
        height: 14px;
        width: 14px;
        padding: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 100%;
        margin-left: -7px;
        margin-top: -7px;
      }
    }
  }
  .el-upload-list--text {
    height: 26px;
    li {
      margin-top: 0;
    }
  }
}
#liabilitiesAffirmDeal .el-dialog{
  width: 700px;
  .dialog-tip{
    width: 560px;
  line-height: 36px;
    color: #000;
    padding-left: 40px;
  }
  .el-upload{
    width: 100%;
  }
  .dialog-btns{
    margin-top: 16px;
    text-align: center;
  }
  .top{
    font-size: @fs-one;
  }
}

</style>