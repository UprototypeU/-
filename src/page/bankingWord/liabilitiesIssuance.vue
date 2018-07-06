<template>
    <div class="fillcontain">
        <div class="table_container">
            应收账款信息

        </div>
    </div>
</template>

<script>
import { InputValidators } from "../../config/mUtils.js";
export default {
  data() {
    return {
        value:''
    };
  },
  components: {},
  created() {
    var res = new InputValidators();
    // console.log(res.addValidator)
    // console.log(InputValidators)

    // res.importStrategies(validationStrategies);
    res.addValidationStrategy("isEqual", function(errMsg, value1, value2) {
      if (value1 !== value2) {
        return this.buildInvalidObj(errMsg, value1);
      }
    });
    res.addValidator("isNoEmpty", "用户名不能为空", this.value);
    var result = res.check();
    console.log(result);
    // if (result) {
    //   // alert(result.errMsg);
    //   // result.element.focus();
    //   // result.element.select();
    //   return false;
    // }
  },
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
</style>
