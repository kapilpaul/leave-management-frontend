import Login from './components/login.vue'
//import Registration from './components/registration.vue'
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
   }
]
