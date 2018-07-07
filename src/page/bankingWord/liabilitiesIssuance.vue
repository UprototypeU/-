<template>
    <div class="fillcontain">
        <div class="table_container">
            应收账款信息
            <input type="text" v-model="value">asdasd
            <div @click="regex()">
              按钮
            </div>
        </div>
    </div>
</template>

<script>
import "../../config/regex.js";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    regex: function() {
      var res = new InputValidators();
      // console.log(res.addValidator)
      // console.log(InputValidators)

      res.importStrategies(validationStrategies);
      res.addValidationStrategy("isEqual", function(errMsg, value1, value2) {
        if (value1 !== value2) {
          return this.buildInvalidObj(errMsg, value1);
        }
      });
      res.addValidator("isNoEmpty", "用户名不能为空", this.value);
      res.addValidator('minLength:6', '用户名的字符个数必须是6到20个', this.value);
      res.addValidator('maxLength:20', '用户名的字符个数必须是6到20个', this.value);
      var result = res.check();
      console.log(result);
      // if (result) {
      //   // alert(result.errMsg);
      //   // result.element.focus();
      //   // result.element.select();
      //   return false;
      // }
      var validationStrategies = {
        isNoEmpty: function(errMsg, value) {
          if (value === "") {
            //验证规则不为空
            return this.buildInvalidObj(errMsg, value);
          }
        },
        minLength: function(errMsg, value, length) {
          if (value.length < length) {
            return this.buildInvalidObj(errMsg, value);
          }
        },
        maxLength: function(errMsg, value, length) {
          if (value.length > length) {
            return this.buildInvalidObj(errMsg, value);
          }
        },
        isMail: function(errMsg, value, length) {
          var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
          if (!reg.test(value)) {
            return this.buildInvalidObj(errMsg, value);
          }
        }
      };
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
</style>
