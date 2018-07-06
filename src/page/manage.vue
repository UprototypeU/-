<template>
	<div class="manage_page fillcontain">
		<el-row>
			<el-col :span="18">
				金海鹰
			</el-col>
			<el-col :span="6">
					<el-row>
						<el-col :span="6">
							<img :src="baseImgPath + adminInfo.avatar" class="avator">
						</el-col>
						<el-col :span="12">
							admin（管理员）
						</el-col>
						<el-col :span="6">
							<div @click="handleCommand()">
                退出
              </div>
						</el-col>
					</el-row>
			</el-col>
		</el-row>
		<el-row style="height: 100%;">
	  		<el-col :span="4" style="background-color: #324057;">
					  <!-- <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router>
              <el-submenu index="1">
                <span slot="title"><i class="el-icon-menu"></i>我的工作台</span>
                <el-menu-item-group>
                  <el-menu-item index="myBanchBacklog" ><i class="el-icon-menu"></i>待办事项</el-menu-item>
                  <el-menu-item index="myBanchQuery"><i class="el-icon-menu"></i>查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <span slot="title"><i class="el-icon-menu"></i>金融业务</span>
                <el-menu-item-group>
                  <el-menu-item index="financingProcess"><i class="el-icon-menu"></i>融资受理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <span slot="title"><i class="el-icon-menu"></i>签章中心</span>
                <el-menu-item-group>
                  <el-menu-item index="signatureDispose"><i class="el-icon-menu"></i>处理</el-menu-item>
                  <el-menu-item index="signatureQuery"><i class="el-icon-menu"></i>查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <span slot="title"><i class="el-icon-menu"></i>账单中心</span>
                <el-submenu index="4-1">
                  <span slot="title"><i class="el-icon-menu"></i>登记</span>
                  <el-menu-item index="billsRegisterCapital">放款账单</el-menu-item>
                  <el-menu-item index="billsRegisterReceivable">应收账款兑付账单</el-menu-item>
                  <el-menu-item index="billsRegisterCredit">融资本金账单</el-menu-item>
                  <el-menu-item index="billsRegisterInterest">融资利息账单</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="userSetting" @click="addTab('待办事项')">
                <i class="el-icon-setting"></i>
                <span slot="title">账户设置</span>
              </el-menu-item>
            </el-menu> -->



          <el-menu router unique-opened :default-active="defaultActive" class="el-menu-vertical-demo">
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
			<el-col :span="20" style="height: 100%;overflow: auto;">
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
import {arrayUnit} from '../config/mUtils.js'
export default {
  data() {
    return {
      baseImgPath,
      editableTabs:[],
      editableTabsValue:'',
      editableActive:'myBanchBacklog',
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
  created() {
    if (!this.adminInfo.id) {
      this.getAdminData();
    }
    this.editableTabs.push(this.menuData[0].children[0])
    this.editableTabs = arrayUnit(this.editableTabs)
  },
  components: {
    headTop
  },
  computed: {
    ...mapState(["adminInfo"]),
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    ...mapActions(["getAdminData"]),
    async handleCommand() {
        this.$message({
          type: "success",
          message: "退出成功"
        });
        this.$router.push("/");
    },
    menuOpen:function(i){
      this.editableTabs.push(i)
      this.editableTabs = arrayUnit(this.editableTabs)
      this.editableActive = i.component
    },
  }
};
</script>


<style lang="less" scoped>
@import "../style/mixin";
#app .el-menu-item-group__title{
    display: none;
}
.avator {
  width: 40px;
  height: 40px;
}
</style>
