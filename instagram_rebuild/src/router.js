import { createWebHistory, createRouter } from 'vue-router';
import filterList from './components/Filter.vue';

const routes = [
	{
		path: '/filter',
		component: filterList,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
