<template>
    <div>
        <head-top></head-top>
		首页
		<!-- <section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{userCount}}</span> 新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{adminCount}}</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div></el-col>
            </el-row>
		</section> -->
		<!-- <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency> -->
    </div>
</template>

<script>
	import headTop from '../components/headTop'
	import tendency from '../components/tendency' 
	import dtime from 'time-formater'
	import {userCount, orderCount, getUserCount, getOrderCount, adminDayCount, adminCount} from '@/api/getData'
    export default {
    	data(){
    		return {
    		}
    	},
    	components: {
    		headTop,
    		tendency,
    	},
    	mounted(){
    		// this.initData();
    		// for (let i = 6; i > -1; i--) {
    		// 	const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
    		// 	this.sevenDay.push(date)
    		// }
    		// this.getSevenData();
    	},
        computed: {

        },
    	methods: {
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	
</style>
