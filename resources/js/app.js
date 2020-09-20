
require('./bootstrap');

window.Vue = require('vue');

import  VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
    { path: '/', component: require('./components/ExampleComponent.vue').default },
    { path: '/about', component: require('./components/AboutComponent.vue').default }
]

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    routes
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
});
