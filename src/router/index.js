import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const loginFlow = r => require.ensure([], () => r(require('@/page/loginFlow')), 'loginFlow');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');

//注册流程
const regSuc = r => require.ensure([], () => r(require('@/page/signFlow/regSuc')), 'regSuc');
const activatingSuc = r => require.ensure([], () => r(require('@/page/signFlow/activatingSuc')), 'activatingSuc');
const forgetPwdStep1 = r => require.ensure([], () => r(require('@/page/signFlow/forgetPwdStep1')), 'forgetPwdStep1');
const signFlowFirmApprove = r => require.ensure([], () => r(require('@/page/signFlow/firmApprove.vue')), 'signFlowFirmApprove');
// 待办事项
const myBanchBacklog = r => require.ensure([], () => r(require('@/page/myBanch/backlog.vue')), 'myBanchBacklog');
// 金融业务
const financingApply = r => require.ensure([], () => r(require('@/page/bankingWord/financingApply.vue')), 'financingApply');
const financingApplyDetail = r => require.ensure([], () => r(require('@/page/bankingWord/financingApplyDetail.vue')), 'financingApplyDeatil');
const financingProcess = r => require.ensure([], () => r(require('@/page/bankingWord/financingProcess.vue')), 'financingProcess');
const financingProcessDetail = r => require.ensure([], () => r(require('@/page/bankingWord/financingProcessDetail.vue')), 'financingProcessDetail');
const financingQuery = r => require.ensure([], () => r(require('@/page/bankingWord/financingQuery.vue')), 'financingQuery');
const financingDetail = r => require.ensure([], () => r(require('@/page/bankingWord/financingDetail.vue')), 'financingDetail');
const liabilitiesIssuance = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesIssuance.vue')), 'liabilitiesIssuance');
const liabilitiesAffirm = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesAffirm.vue')), 'liabilitiesAffirm');
const liabilitiesAffirmDeal = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesAffirmDeal.vue')), 'liabilitiesAffirmDeal');
const liabilitiesQuery = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesQuery.vue')), 'liabilitiesQuery');
const liabilitiesQueryDetail = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesQueryDetail.vue')), 'liabilitiesQueryDetail');
// 签章中心
const signatureDispose = r => require.ensure([], () => r(require('@/page/signature/dispose.vue')), 'signatureDispose');
const signatureDisposeDetail = r => require.ensure([], () => r(require('@/page/signature/disposeDetail.vue')), 'signatureDisposeDetail');
const signatureDisposeCheck = r => require.ensure([], () => r(require('@/page/signature/disposeCheck.vue')), 'signatureDisposeCheck');
// 账单中心
const billsCapital = r => require.ensure([], () => r(require('@/page/bills/capital.vue')), 'billsCapital');
const billsCredit = r => require.ensure([], () => r(require('@/page/bills/credit.vue')), 'billsCredit');
const billsInterest = r => require.ensure([], () => r(require('@/page/bills/interest.vue')), 'billsInterest');
const billsReceivable = r => require.ensure([], () => r(require('@/page/bills/receivable.vue')), 'billsReceivable');
//账单中心公用组件
const commonApyCheck = r => require.ensure([], () => r(require('@/page/bills/commonApyCheck.vue')), 'commonApyCheck');
const commonApyRegister = r => require.ensure([], () => r(require('@/page/bills/commonApyRegister.vue')), 'commonApyRegister');

// 账户设置
const settingAccount = r => require.ensure([], () => r(require('@/page/uesrSetting/account.vue')), 'settingAccount');
const settingBasicInfo = r => require.ensure([], () => r(require('@/page/uesrSetting/basicInfo.vue')), 'settingBasicInfo');
const settingUserInfo = r => require.ensure([], () => r(require('@/page/uesrSetting/settingUserInfo.vue')), 'settingUserInfo');
const settingBusiness = r => require.ensure([], () => r(require('@/page/uesrSetting/business.vue')), 'settingBusiness');
const settingSignature = r => require.ensure([], () => r(require('@/page/uesrSetting/signature.vue')), 'settingSignature');
const settingSymbiosis = r => require.ensure([], () => r(require('@/page/uesrSetting/symbiosis.vue')), 'settingSymbiosis');

// const settingPwd = r => require.ensure([], () => r(require('@/page/uesrSetting/settingPwd.vue')), 'settingPwd');
// const regSuc = r => require.ensure([], () => r(require('@/page/signFlow/regSuc')), 'regSuc');
// const forgetPwdStep2 = r => require.ensure([], () => r(require('@/page/signFlow/forgetPwdStep2')), 'forgetPwdStep2');

const routes = [
	{
		path: '*',
		component: login,
		meta: ['登陆'],
	},
	{
		path: '/forgetPwdStep1',
		component: forgetPwdStep1,
		meta: ['忘记密码'],
	},
	{
		path: '/loginFlow',
		component: loginFlow,
		meta: ['注册'],
	},
	{
		path: '/regSuc',
		component: regSuc,
		meta: ['注册成功'],
	},
	{
		path: '/activatingSuc',
		component: activatingSuc,
		meta: ['激活成功'],
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '/signFlowFirmApprove',
			name:'signFlowFirmApprove',
			component: signFlowFirmApprove,
			meta: ['企业认证流程'],
		}, {
			path: '/myBanchBacklog',
			name:'myBanchBacklog',
			component: myBanchBacklog,
			meta: ['我的工作台', '待办事项'],
		}, {
			path: '/financingProcess',
			name:'financingProcess',
			component: financingProcess,
			meta: ['融资业务', '融资受理'],
		}, {
			path: '/financingProcessDetail',
			name:'financingProcessDetail',
			component: financingProcessDetail,
			meta: ['融资业务', '受理处理'],
		}, {
			path: '/financingApply',
			name:'financingApply',
			component: financingApply,
			meta: ['融资业务', '融资申请'],
		}, {
			path: '/financingApplyDetail',
			name:'financingApplyDetail',
			component: financingApplyDetail,
			meta: ['融资业务', '融资申请处理']
		},{
			path: '/financingQuery',
			name:'financingQuery',
			component: financingQuery,
			meta: ['融资业务', '融资查询'],
		}, {
			path: '/financingDetail',
			name:'financingDetail',
			component: financingDetail,
			meta: ['融资业务', '查看融资详情'],
		}, {
			path: '/liabilitiesIssuance',
			name:'liabilitiesIssuance',
			component: liabilitiesIssuance,
			meta: ['融资业务', '应收账款签发'],
		}, {
			path: '/liabilitiesAffirm',
			name:'liabilitiesAffirm',
			component: liabilitiesAffirm,
			meta: ['融资业务', '应收账款确认'],
		}, {
			path: "/liabilitiesAffirmDeal",
			name:'liabilitiesAffirmDeal',
			component: liabilitiesAffirmDeal,
			meta: ['融资业务', '应收账款确认']
		},{
			path: '/liabilitiesQuery',
			name:'liabilitiesQuery',
			component: liabilitiesQuery,
			meta: ['融资业务', '应收账款查询'],
		},{
			path: '/liabilitiesQueryDetail',
			name:'liabilitiesQueryDetail',
			component: liabilitiesQueryDetail,
			meta: ['融资业务', '应收账款查询详情'],
		}, {
			path: '/signatureDispose',
			name:'signatureDispose',
			component: signatureDispose,
			meta: ['签章中心'],
		}, {
			path: '/signatureDisposeDetail',
			name:'signatureDisposeDetail',
			component: signatureDisposeDetail,
			meta: ['签章文件'],
		},{
			path: '/signatureDisposeCheck',
			name:'signatureDisposeCheck',
			component: signatureDisposeCheck,
			meta: ['签章文件查看'],
		}, {
			path: '/billsCapital',
			name:'billsCapital',
			component: billsCapital,
			meta: ['账单中心', '放款账单'],
		}, {
			path: '/billsReceivable',
			name:'billsReceivable',
			component: billsReceivable,
			meta: ['账单中心', '应收账款兑付账单'],
		}, {
			path: '/billsCredit',
			name:'billsCredit',
			component: billsCredit,
			meta: ['账单中心', '融资本金账单'],
		}, {
			path: '/billsInterest',
			name:'billsInterest',
			component: billsInterest,
			meta: ['账单中心', '融资利息账单'],
		}, 
		//  {
		// 	path: '/commonApyCheck',
		// 	name:'commonApyCheck',
		// 	component: commonApyCheck,
		// 	meta: ['账单中心', '支付查看'],
		// },  {
		// 	path: '/commonApyRegister',
		// 	name:'commonApyRegister',
		// 	component: commonApyRegister,
		// 	meta: ['账单中心', '支付登记'],
		// }, 
		{
			path: '/settingAccount',
			name:'settingAccount',
			component: settingAccount,
			meta: ['账户设置', '银行账户'],
		}, {
			path: '/settingBasicInfo',
			name:'settingBasicInfo',
			component: settingBasicInfo,
			meta: ['账户设置', '基本信息'],
		}, {
			path: '/settingUserInfo',
			component: settingUserInfo,
			meta: ['账户设置', '企业基本信息修改'],
		},
		//  {
		// 	path: '/settingPwd',
		// 	component: settingPwd,
		// 	meta: ['账户设置', '修改密码'],
		// },
		 {
			path: '/settingBusiness',
			name:'settingBusiness',
			component: settingBusiness,
			meta: ['账户设置', '业务资格'],
		}, {
			path: '/settingSignature',
			name:'settingSignature',
			component: settingSignature,
			meta: ['账户设置', '电子签章'],
		}, {
			path: '/settingSymbiosis',
			name:'settingSymbiosis',
			component: settingSymbiosis,
			meta: ['账户设置', '合作关系'],
		}]
	}
]
const router = new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production'
})
router.beforeEach((to, from, next) => {
    document.title = to.meta[1]||to.meta[0];
    next();
});
export default  router;