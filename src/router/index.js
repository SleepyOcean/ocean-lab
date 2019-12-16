import Vue from 'vue';
import Router from 'vue-router';
import Laboratory from '../components/Laboratory';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Laboratory',
			component: Laboratory
		},
		{
			path: '/layout',
			component: () => import('../components/lab/layout/LayoutLab'),
			meta: {
				title: 'CSS布局'
			}
		},
		{
			path: '/time',
			component: () => import('../components/lab/clock/TimeLocker'),
			meta: {
				title: '时钟锁屏'
			}
		},
		{
			path: '/blank',
			component: () => import('../components/lab/blank/TestPage'),
			meta: {
				title: '实验室'
			}
		},
		{
			path: '/3D',
			component: () => import('../components/lab/threed/ThreeDLab'),
			meta: {
				title: '3D实验室'
			}
		},
		{
			path: '/typing',
			component: () => import('../components/lab/typing/TypeFun'),
			meta: {
				title: '打字练习'
			}
		},
		{
			path: '/typingChinese',
			component: () => import('../components/lab/typing/TypeFunForChinese'),
			meta: {
				title: '打字练习（中文版）'
			}
		}
	]
});
