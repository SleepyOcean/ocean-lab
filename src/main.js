import Vue from 'vue';
import App from './App';
import router from './router';
import './style/common.scss'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	console.log('欢迎来到沉睡的海洋');
	if (to.params.id) {
		window.document.title = to.params.id.split('=')[0];
	} else {
		window.document.title = to.meta.title ? to.meta.title : '沉洋';
	}
	next();
});

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
