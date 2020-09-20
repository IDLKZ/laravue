
require('./bootstrap');

window.Vue = require('vue');

import  VueRouter from "vue-router";
import  routes from "./routes";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//Css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Use

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Router
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
})


const app = new Vue({
    router,
    el: '#app',
});
