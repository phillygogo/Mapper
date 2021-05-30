import 'core-js/stable';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import VueAxios from 'vue-axios';
// const axios = require('axios').default;

const app = new Vue({
	el: '#app',
	router,
	components: {
		App,
	},
	mounted() {
	},
});

// Vue.use(VueAxios, axios)
