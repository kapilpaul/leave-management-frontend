import Login from './components/login.vue'
import employees from './components/employee/allemployee.vue'
import company from './components/settings/companysettings.vue'
//import Feed from './components/feed.vue'

export const routes = [
   {
       path: "/",
       component: Login,
       meta: {
           forAuth: true
       }
   },
   {
       path: "/login",
       component: Login,
       meta: {
           forVisitors: true
       }
   },
   {
       path: "/employees",
       component: employees,
       meta: {
           forAuth: true
       }
   },
   {
       path: "/company-settings",
       component: company,
       meta: {
           forAuth: true
       }
   }
]
