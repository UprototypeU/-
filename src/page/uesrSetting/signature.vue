<template>
        <div class="signature" :style="{'height':heigh-150+'px'}">
            <div class="content">
                <h4>电子签章信息
                    <!-- <a href="javascript:;" class="fr">电子签章申请须知</a> -->
                </h4>
                <div class="last">
                    <ul>
                        <li><span>电子签章类型</span><span>手机验证码签章</span></li>
                        <li><span>手机号码</span><span>18621254563</span></li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <h4>经办人信息</h4>
                <div class="last">
                    <ul>
                        <li><span>经办人姓名</span><span>周柳</span></li>
                        <li><span>证件有效期</span><span>至 2026-08-09</span></li>
                        <li><span>职务</span><span>COO</span></li>
                        <li><span>电子邮箱</span><span>baodger@server.com</span></li>
                        <li><span>证件类型</span><span>身份证   </span></li>
                        <li><span>证件号码</span><span>420107195209181936</span></li>
                        <li><span>手机号码</span><span>18621254563</span></li>
                        <li><span>经办人企业授权书</span><span><img src="" alt=""></span></li>
                    </ul>
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
.signature {
  background-color: #fff;
  width: 100%;
  height: 100%;
//   padding: 0 20px;
  box-sizing: border-box;
  .content {
    width: 100%;
    h4 {
      background: #ebeef8;
      border: 1px solid #dce2e4;
      padding: 0 20px;
      line-height: 40px;
    }
    .last {
        border: 1px solid #dce2e4;
        padding: 20px;
        border-top: 0;
      ul {
        overflow: hidden;
        li {
          float: left;
          padding: 0 30px;
          width: 50%;
          height: 35px;
          line-height: 35px;
          box-sizing: border-box;
          >span:first-child{
              width: 30%;
              display: inline-block;
          }
        }
      }
    }
    margin-bottom: 20px;
  }
}
</style>
