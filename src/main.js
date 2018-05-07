import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import VeeValidate from 'vee-validate'
import { routes } from './routes.js'
import Auth from './Auth.js'
// window.$ = window.jquery = require('jquery')

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(Auth)


Object.defineProperties(Vue.prototype, {
    $swal: {
        value : Swal
    },
    $axios : {
        value : axios
    }
})

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})

axios.defaults.baseURL = 'http://leavemanagement.local/';

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error) {
        let errorData = error.response;
        console.log(errorData)
        if(errorData.status === 500) {
            var stext = errorData.statusText
        }
        if(errorData.status === 401) {
            var stext = errorData.data.error
        }

        Swal({
            title: errorData.status.toString(),
            text: stext,
            type: 'error',
        }).then((result) => {
            router.push("/employees")
        })
    }
});


router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)) {
        if(Vue.auth.isAuthenticated()) {
            next({
                path : '/employees'
            })
        } else next()
    } else if(to.matched.some(record => record.meta.forAuth)) {
        if(! Vue.auth.isAuthenticated()) {
            next({
                path : '/login'
            })
        } else next()
    } else next()
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
