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
		}
	]
});
