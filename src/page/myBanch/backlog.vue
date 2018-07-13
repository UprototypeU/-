<template>
  <div>
    <div class="backlog" v-if="!infoCentreflag" :style="{'height':heigh-150+'px'}">
        <el-row>
            <el-col :span="15" class="left-content">
                <div class="grid-content">
                    <h3 class="clear title fs14">
                        <span class="fl fs16">待办事项</span>
                        <span class="fr">
                            <el-select v-model="queryData.status">
                                <el-option v-for="item in options" :label="item.value" :value="item.key" :key="item.key"></el-option>
                            </el-select>
                            <a href="javascript:;" class="ml">更多</a>
                        </span>
                    </h3>
                    <ul class="clear">
                        <li v-for="(item,index) in data" :key="index">
                            <span>{{item.name1}}</span> |
                            <span>{{item.name2}}</span> |
                            <span>{{item.name3}}</span> |
                            <span>{{item.name4}}</span>
                            <i class="fr">{{item.time}}</i>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="9" class="right-content">
                <div class="grid-content">
                    <div class="bg-t-purple">
                        <h3 class="clear title fs14">
                            <span class="fl fs16">消息中心</span>
                            <a href="javascript:;" class="fr" @click="infoCentreflag = true">查看所有消息>></a>
                        </h3>
                        <ul>
                            <li v-for="(item,index) in data1" :key="index">
                                <span>{{item.name}}</span>
                                <span class="fr">{{item.time}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-b-purple">
                        <h3 class="clear title fs14">
                            <span class="fs16">操作手册</span>
                        </h3>
                        <ul>
                            <li v-for="(item,index) in data2" :key="index">
                                <span>{{item.name}}</span>
                                <span class="fr">{{item.time}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <infoCentre v-if="infoCentreflag"  v-on:headCallBack="headCall"></infoCentre>
  </div>
</template>

<script>
import infoCentre from './infoCentre'
export default {
  data() {
    return {
      heigh: "",
      infoCentreflag:false,
      data: [
        {
          name1: "项目编号",
          name2: "项目编号",
          name3: "项目编号",
          name4: "项目编号",
          time: "2018-06-21 15:30:58"
        },
        {
          name1: "项目编号",
          name2: "项目编号",
          name3: "项目编号",
          name4: "项目编号",
          time: "2018-06-21 15:30:58"
        }
      ],
      data1: [
        {
          name: "我是消息标题",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "我是消息标题",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "我是消息标题",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "我是消息标题",
          time: "2018-06-21 15:30:58"
        }
      ],
      data2: [
        {
          name: "系统公告",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "系统公告",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "系统公告",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "系统公告",
          time: "2018-06-21 15:30:58"
        },
        {
          name: "系统公告",
          time: "2018-06-21 15:30:58"
        }
      ],
      options: [{ key: "0", value: "未处理" }, { key: "1", value: "已处理" }],

      queryData: {
        status: "0"
      }
    };
  },
  components: {
    infoCentre
  },
  created() {},
  mounted() {
    this.heigh = document.documentElement.clientHeight;
  },
  methods: {
    headCall(val){
      this.infoCentreflag = val
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.backlog {
  background-color: #fafafa;
  input {
    border: none;
    width: 90px;
    background-color: #ebeef8;
    color: @mc;
  }
  > div,
  > div > div {
    height: 100%;
  }

  .left-content {
    padding-right: 30px;
    .grid-content {
      box-shadow: 0 0 5px #eee;
    }
  }
  .right-content {
    padding-right: 30px;
    .grid-content {
      background-color: #fafafa;
      .bg-t-purple,
      .bg-b-purple {
        background-color: #fff;
      }
    }
  }
  .grid-content {
    height: 100%;
    color: #323232;
    background-color: #fff;
    .bg-t-purple {
      box-shadow: 0 0 5px #eee;
      height: 58%;
      margin-bottom: 2%;
    }
    .title {
      padding-right: 30px;
      padding-left: 20px;
      line-height: 50px;
      background-color: #ebeef8;
    }
    ul {
      padding-right: 30px;
      padding-left: 20px;
      padding-top: 10px;
    }
    li {
      line-height: 40px;
    }
    .bg-b-purple {
      height: 40%;
      overflow: hidden;
    }
  }
  a {
    color: @mc;
  }
  .fs16 {
    font-size: @fs-one;
  }
  .fs14 {
    font-size: @fs-two;
  }
}
</style>