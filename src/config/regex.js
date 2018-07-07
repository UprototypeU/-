/**
 * 正则验证
 */
InputValidators = () => {
    this.validators = [];
    this.strategies = {};
    // this.importStrategies(validationStrategies);
    console.log(this)
}

//参数:
//  rule: 验证策略字符串
//  errMsg: 验证失败时显示的提示信息
//  value: 被验证的值
InputValidators.prototype.addValidator = (rule,  errMsg, value) => {
    var that = this;
    var ruleElements = rule.split(":");
    this.validators.push( () => {
        var strategy = ruleElements.shift();
        console.log(strategy)
        var params = ruleElements;
        console.log(params)
        params.unshift(value);
        params.unshift(errMsg);

        return that.strategies[strategy].apply(that, params);
    });
};

//添加验证策略函数
//参数:
//  name: 策略名称
//  strategy: 策略函数
InputValidators.prototype.addValidationStrategy = (name, strategy)  =>{
    this.strategies[name] = strategy;
};

//从策略对象导入验证策略函数
//参数:
//  strategies: 包含各种策略函数的对象
InputValidators.prototype.importStrategies = (strategies) => {
    for (var strategyName in strategies) {
        this.addValidationStrategy(strategyName, strategies[strategyName]);
    }
};

//验证失败时，将相关的错误信息打包返回
//参数:
//   errMsg: 验证失败时的提示消息
//    value: 被验证的值
InputValidators.prototype.buildInvalidObj = ( errMsg, value) => {
    return {
        'value': value,
        'errMsg': errMsg
    };
};

//开始验证
InputValidators.prototype.check = () => {
    for (var i = 0, validator; validator = this.validators[i++];) {
        var result = validator();
        if (result) {
            return result;
        }
    }
};
var validationStrategies = {
    isNoEmpty: function(errMsg, value) {
      if (value === "") {  //验证规则不为空
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