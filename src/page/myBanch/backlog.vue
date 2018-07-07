<template>
    <div class="fillcontain">
        <div class="table_container" :style="{'height':heigh-150+'px'}">
            <el-row>
                <el-col :span="15">
                    <div class="grid-content mr">
                        <h3 class="clear">
                            <span class="fl">待办事项</span>
                            <span class="fr">
                                <el-button>未处理</el-button>
                                <el-button>已处理</el-button>
                            </span>
                        </h3>
                        <ul class="clear">
                            <li v-for="(item,index) in data" :key="index">
                                <span>{{item.name1}}</span>
                                <span>{{item.name2}}</span>
                                <span>{{item.name3}}</span>
                                <span>{{item.name4}}</span>
                                <i class="fr">{{item.time}}</i>
                            </li>
                            <li>
                                <span class="fr">查看更多</span>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div class="grid-content">
                        <div class="bg-t-purple">
                            <h3 class="clear">
                                <span class="fl">消息中心</span>
                                <a href="javascript:;" class="fr">查看所有消息》》</a>
                            </h3>
                            <ul>
                                <li v-for="(item,index) in data1" :key="index">
                                    <span>{{item.name}}</span>
                                    <span class="fr">{{item.time}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-b-purple">
                            <h3>
                                <span>操作手册</span>
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
    </div>
</template>

<script>
export default {
  data() {
    return {
        heigh:'',
        data:[{
            name1:'项目编号',
            name2:'项目编号1',
            name3:'项目编号2',
            name4:'项目编号3',
            time:'2018-06-21 15:30:58'
        }],
        data1:[{
            name:'我是消息标题',
            time:'2018-06-21 15:30:58'
        }],
        data2:[{
            name:'系统公告',
            time:'2018-06-21 15:30:58'
        }]
    };
  },
  components: {},
  created() {},
  mounted() {
      this.heigh = document.documentElement.clientHeight
  },
  methods: {},
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.grid-content{
    height: 100%;
    .bg-t-purple{
        margin-bottom: 5px;
    }
    .bg-b-purple{      
    }
}
</style>
