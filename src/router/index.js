import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const loginFlow = r => require.ensure([], () => r(require('@/page/loginFlow')), 'loginFlow');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const signFlowFirmApprove = r => require.ensure([], () => r(require('@/page/signFlow/firmApprove.vue')), 'signFlowFirmApprove');
const myBanchBacklog = r => require.ensure([], () => r(require('@/page/myBanch/backlog.vue')), 'myBanchBacklog');
const financingApply = r => require.ensure([], () => r(require('@/page/bankingWord/financingApply.vue')), 'financingApply');
const financingProcess = r => require.ensure([], () => r(require('@/page/bankingWord/financingProcess.vue')), 'financingProcess');
const financingQuery = r => require.ensure([], () => r(require('@/page/bankingWord/financingQuery.vue')), 'financingQuery');
const liabilitiesIssuance = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesIssuance.vue')), 'liabilitiesIssuance');
const liabilitiesAffirm = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesAffirm.vue')), 'liabilitiesAffirm');
const liabilitiesQuery = r => require.ensure([], () => r(require('@/page/bankingWord/liabilitiesQuery.vue')), 'liabilitiesQuery');
const signatureDispose = r => require.ensure([], () => r(require('@/page/signature/dispose.vue')), 'signatureDispose');
const billsCapital = r => require.ensure([], () => r(require('@/page/bills/capital.vue')), 'billsCapital');
const billsCredit = r => require.ensure([], () => r(require('@/page/bills/credit.vue')), 'billsCredit');
const billsInterest = r => require.ensure([], () => r(require('@/page/bills/interest.vue')), 'billsInterest');
const billsReceivable = r => require.ensure([], () => r(require('@/page/bills/receivable.vue')), 'billsReceivable');
const userSetting = r => require.ensure([], () => r(require('@/page/uesrSetting/setting.vue')), 'userSetting');



const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/loginFlow',
		component: loginFlow
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '/signFlowFirmApprove',
			component: signFlowFirmApprove,
			meta: ['企业认证流程'],
		}, {
			path: '/myBanchBacklog',
			component: myBanchBacklog,
			meta: ['我的工作台', '待办事项'],
		}, {
			path: '/financingProcess',
			component: financingProcess,
			meta: ['融资业务', '融资受理'],
		}, {
			path: '/financingApply',
			component: financingApply,
			meta: ['融资业务', '融资申请'],
		}, {
			path: '/financingQuery',
			component: financingQuery,
			meta: ['融资业务', '融资查询'],
		}, {
			path: '/liabilitiesIssuance',
			component: liabilitiesIssuance,
			meta: ['融资业务', '应收账款签发'],
		}, {
			path: '/liabilitiesAffirm',
			component: liabilitiesAffirm,
			meta: ['融资业务', '应收账款确认'],
		}, {
			path: '/liabilitiesQuery',
			component: liabilitiesQuery,
			meta: ['融资业务', '应收账款查询'],
		}, {
			path: '/signatureDispose',
			component: signatureDispose,
			meta: ['签章中心'],
		}, {
			path: '/billsCapital',
			component: billsCapital,
			meta: ['账单中心', '放款账单'],
		}, {
			path: '/billsReceivable',
			component: billsReceivable,
			meta: ['账单中心', '应收账款兑付账单'],
		}, {
			path: '/billsCredit',
			component: billsCredit,
			meta: ['账单中心', '融资本金账单'],
		}, {
			path: '/billsInterest',
			component: billsInterest,
			meta: ['账单中心', '融资利息账单'],
		}, {
			path: '/userSetting',
			component: userSetting,
			meta: ['账户设置'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})