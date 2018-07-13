<template>
	<div class="manage_page fillcontain">
		<el-row class="headerManage">
			<el-col :span="21" class="left">贸易金融平台</el-col>
			<el-col :span="3" class="right">
        <el-dropdown @command="handleCommand" menu-align='start'>
          <span class="el-dropdown-link">
            <i class="iconfont icon-yonghu"></i> admin（管理员）
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="home">修改密码</el-dropdown-item>
            <el-dropdown-item command="singout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
			</el-col>
		</el-row>
		<el-row :style="{'height':heigh-70+'px'}" class="mainManage">
	  		<el-col class="left" :span="3">
          <el-menu background-color="#4A6CD5" text-color="#fff" active-text-color="#fff" router unique-opened 
            :default-active="editableActive">
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
        <el-col class="right" :span="21" style="height: 100%;overflow: auto;">
          <!-- <head-top :editable-tabs = "editableTabs" :editable-active= "editableActive"></head-top> -->
          <el-tabs v-model="editableActive" type="card" @tab-click="handleOpen" closable @tab-remove="removeTab">
            <el-tab-pane v-for="item in editableTabs"
              :key="item.component"
              :label="item.title"
              :name="item.component">
            </el-tab-pane>
          </el-tabs>
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
import { arrayUnit } from "../config/mUtils.js";
export default {
  data() {
    return {
      baseImgPath,
      editableTabs: [],
      editableTabsValue: "",
      editableActive: "myBanchBacklog",
      heigh: "",
      menuData: [
        {
          icon: "iconfont icon-pingtai",
          title: "我的工作台",
          children: [
            {
              title: "待办事项",
              component: "myBanchBacklog"
            }
          ]
        },
        {
          icon: "iconfont icon-yewu",
          title: "金融业务",
          children: [
            {
              title: "应付账款签发",
              component: "liabilitiesIssuance"
            },
            {
              title: "应付账款确认",
              component: "liabilitiesAffirm"
            },
            {
              title: "应付账款查询",
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
          icon: "iconfont icon-dianziqianzhang",
          title: "签章中心",
          component: "signatureDispose"
        },
        {
          icon: "iconfont icon-zhangdan",
          title: "账单中心",
          component: "vip",
          children: [
            {
              title: "放款账单",
              component: "billsCapital"
            },
            {
              title: "应付账款兑付账单",
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
          icon: "iconfont icon-shezhi-xianxing",
          title: "系统设置",
          children: [
            {
              title: "基本信息",
              component: "settingBasicInfo"
            },
            {
              title: "业务资格",
              component: "settingBusiness"
            },
            {
              title: "电子签章",
              component: "settingSignature"
            },
            {
              title: "银行账户",
              component: "settingAccount"
            },
            {
              title: "合作关系",
              component: "settingSymbiosis"
            }
          ]
        }
      ]
    };
  },
  created() {
    //此处拒绝dom操作
    if (!this.adminInfo.id) {
      this.getAdminData();
    }
    this.editableTabs.push(this.menuData[0].children[0]);
    let data = this.$route;
    if (data.path.replace("/", "") !== "myBanchBacklog") {
      this.editableTabs.push({
        title: data.meta[data.meta.length - 1],
        component: data.path.replace("/", "")
      });
      this.editableActive = data.path.replace("/", "");
    }
    this.editableTabs = arrayUnit(this.editableTabs, "component");
  },
  components: {},
  mounted() {
    // 此处只执行一次
    this.heigh = document.documentElement.clientHeight;
  },
  computed: {
    ...mapState(["adminInfo"]),
    defaultActive: {
      get: function() {
        return this.$route.path.replace("/", "");
      },
      set: function(newValue) {
        console.log(newValue);
        this.editableActive = newValue;
      }
    }
  },
  methods: {
    ...mapActions(["getAdminData"]),
    async handleCommand(command) {
      if (command == "home") {
        alert("这里出修改密码");
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
      this.editableTabs = arrayUnit(this.editableTabs, "component");
      this.editableActive = i.component;
    },
    handleOpen(tab, event) {
      this.$router.push(tab.name);
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableActive;
      tabs.forEach((v, i) => {
        if (v.component == targetName) {
          tabs.splice(i, 1);
          if (v.component == activeName) {
            this.editableActive = tabs[i - 1].component;
            this.$router.push(this.editableActive);
          }
        }
      });
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
.mainManage {
  padding-top: 18px;
  background-color: #f0f3f8;
  .left {
    height: 100%;
    background-color: @mc;
    .el-menu {
      border: 0;
      .icon-pingtai {
        font-size: 18px;
      }
      .el-submenu__title > span {
        font-size: @fs-one;
        i {
          color: @sc;
        }
      }
      .el-menu-item {
        span > i {
          color: @sc;
        }
        font-size: @fs-two;
      }
      .el-submenu .el-menu-item {
        min-width: initial;
        padding-left: 60px !important;
      }
    }
    .el-menu-item.is-active {
      // color: @mc !important;
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
  }
  .right {
    height: 100%;
    padding-left: 15px;
    > div {
      background-color: #fff;
      padding-left: 20px;
    }
  }
}
</style>
<style lang="less">
  #tab-myBanchBacklog{
    .el-icon-close{
      width:0 !important;
    }
  }
</style>
