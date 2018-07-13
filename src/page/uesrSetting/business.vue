<template>
    <div class="bisiness" :style="{'height':heigh-150+'px'}" >
      <div class="box">
          <h4 class="title clear">已获得业务资格</h4>
          <div class="content">
            <p class="clear">
              <label><i class="iconfont icon-zigezhengshu"></i>企业资格</label>
              <span>已在金融机构获得授信额度的核心企业，可签发应付账款确认函。由核心企业指定的供应商，可确认应付账款、向金融机构融资、对应收账款债权进行拆分转让。</span>
              <el-button class="fr" type="primary">修改业务资格</el-button>
            </p>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      heigh: ""
    };
  },
  components: {},
  created() {},
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {},
  watch: {}
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.bisiness {
  background-color: #fff;
  padding: 20px 40px;
  padding-bottom: 80px;
  font-size: @fs-two;
  color: #333;
  box-sizing: border-box;
  .box {
    margin-bottom: 20px;
    .title {
      background: #ebeef8;
      border: 1px solid #dce2e4;
      padding: 0 30px;
      line-height: 40px;
      button {
        font-size: @fs-two;
        letter-spacing: 0;
        text-align: left;
        margin: 5px 30px 0 0;
      }
    }
    .content {
      padding: 25px 30px;
      border: 1px solid #dce2e4;
      font-size: 0;
      p {
        font-size: @fs-two;
        line-height: 30px;
      }
      label {
        display: inline-block;
        width: 10%;
        color: #000;
        font-weight: bold;
        >i{
          font-weight: normal;
          color: #4A6CD5;
        }
      }
      span {
        display: inline-block;
        width: 70%;
        vertical-align: middle;
        &.link {
          color: #4a6cd5;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
