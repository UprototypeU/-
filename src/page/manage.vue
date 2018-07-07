<template>
	<div class="manage_page fillcontain">
		<el-row class="headerManage">
			<el-col :span="21" class="left">贸易金融平台</el-col>
			<el-col :span="3" class="right">
        <el-dropdown @command="handleCommand" menu-align='start'>
          <span class="el-dropdown-link">
            <i class=""></i> admin（管理员）
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="home">修改密码</el-dropdown-item>
            <el-dropdown-item command="singout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
			</el-col>
		</el-row>
		<el-row :style="{'height':heigh-70+'px'}" class="mainManage">
	  		<el-col class="left" :span="4">
          <el-menu background-color="#4A6CD5" text-color="#fff" active-text-color="#fff" router unique-opened 
            :default-active="defaultActive">
              <div v-for="(i,j) in menuData" :key="j" :index="j.toString()">
                <el-menu-item @click="menuOpen(i)" v-if="typeof i.children === 'undefined'"
                :index="i.component">
                  <span slot="title"><i :class="i.icon"></i>{{i.title}}</span>
                </el-menu-item>
                <el-submenu :index="j.toString()" class="border" v-else>
                  <template slot="title">
                    <span slot="title"><i :class="i.icon"></i>{{i.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item @click="menuOpen(m)" v-for="(m,n) in i.children" :key="n" :index="m.component">
                      {{m.title}}
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </div>
            </el-menu>
				</el-col>
        <el-col class="right" :span="20" style="height: 100%;overflow: auto;">
          <head-top :editable-tabs = "editableTabs" :editable-active= "editableActive"></head-top>
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </el-col>
		</el-row>
  	</div>
</template>
<script>
import { baseImgPath } from "@/config/env";
import { signout } from "@/api/getData";
import { mapActions, mapState } from "vuex";
import headTop from "../components/headTop";
import { arrayUnit } from "../config/mUtils.js";
export default {
  data() {
    return {
      baseImgPath,
      editableTabs: [],
      editableTabsValue: "",
      editableActive: "myBanchBacklog",
      heigh:'',
      menuData: [
        {
          icon: "el-icon-menu",
          title: "我的工作台",
          children: [
            {
              title: "待办事项",
              component: "myBanchBacklog"
            }
          ]
        },
        {
          icon: "el-icon-menu",
          title: "金融业务",
          children: [
            {
              title: "应收账款签发",
              component: "liabilitiesIssuance"
            },
            {
              title: "应收账款确认",
              component: "liabilitiesAffirm"
            },
            {
              title: "应收账款查询",
              component: "liabilitiesQuery"
            },
            {
              title: "融资申请",
              component: "financingApply"
            },
            {
              title: "融资受理",
              component: "financingProcess"
            },
            {
              title: "融资查询",
              component: "financingQuery"
            }
          ]
        },
        {
          icon: "el-icon-menu",
          title: " 签章中心",
          component: "signatureDispose"
        },
        {
          icon: "el-icon-menu",
          title: "账单中心",
          component: "vip",
          children: [
            {
              title: "放款账单",
              component: "billsCapital"
            },
            {
              title: "应收账款兑付账单",
              component: "billsReceivable"
            },
            {
              title: "融资本金账单",
              component: "billsCredit"
            },
            {
              title: "融资利息账单",
              component: "billsInterest"
            }
          ]
        },
        {
          icon: "el-icon-menu",
          title: "  系统设置",
          component: "userSetting"
        }
      ]
    };
  },
  created() {  //此处拒绝dom操作
    if (!this.adminInfo.id) {
      this.getAdminData();
    }
    this.editableTabs.push(this.menuData[0].children[0]);
    this.editableTabs = arrayUnit(this.editableTabs);
  },
  components: {
    headTop
  },
  mounted() {  // 此处只执行一次
    this.heigh = document.documentElement.clientHeight
  },
  computed: {
    ...mapState(["adminInfo"]),
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    ...mapActions(["getAdminData"]),
    async handleCommand(command) {
      if (command == "home") {
        alert("这里出弹框");
      } else if (command == "singout") {
        this.$message({
          type: "success",
          message: "退出成功"
        });
        this.$router.push("/");
      }
    },
    menuOpen: function(i) {
      this.editableTabs.push(i);
      this.editableTabs = arrayUnit(this.editableTabs);
      this.editableActive = i.component;
    }
  }
};
</script>


<style lang="less" scoped>
@import "../style/mixin";
#app .el-menu-item-group__title {
  display: none;
}
.avator {
  width: 35px;
  height: 35px;
}
.headerManage {
  width: 100%;
  padding-left: 64px;
  height: 70px;
  line-height: 70px;
  color: #fff;
  .bis("../assets/img/headerBg.png");
  .left {
    font-size: 20px;
    
  }
  .right {
    .el-dropdown-link {
      color: #fff;
    }
  }
}
.mainManage{
  .left{
    height: 100%;
    background-color: @mc;
    .el-menu{
      background-color: @mc;
      .el-submenu__title > span{
        color: @sc;
        font-size: @fs-one;
      }
      .el-menu-item{
        color: @sc;
        background-color: @mc;
        font-size: @fs-two;
      }
    }
  }
  .right{
    height: 100%;
  }
}

</style>
