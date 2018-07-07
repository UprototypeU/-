<template>
    <div class="header_container">
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb> -->
      <el-tabs v-model="defaultActive" type="card" @tab-click="handleOpen" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.component"
          :label="item.title"
          :name="item.component">
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "",
      tabIndex: 2,
      defaultActive:this.editableActive
    };
  },
  props: ["editableTabs", "editableActive"],
  created() {},
  computed: {
  },
  methods: {
    handleOpen(tab, event) {
      // console.log(tab.name);
      this.$router.push(tab.name);
    },
    removeTab(targetName) {
      console.log(targetName)
    }
  },
  watch: {
    editableActive:function(v){
      this.defaultActive = v
    }
  }
};
</script>

<style lang="less">
@import "../style/mixin";
.header_container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.avator {
  .wh(36px, 36px);
  border-radius: 50%;
  margin-right: 37px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
