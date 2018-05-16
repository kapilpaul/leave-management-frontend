import Login from './components/login.vue'
import employees from './components/employee/allemployee.vue'
import employeesDetails from './components/employee/details.vue'
import company from './components/settings/companysettings.vue'
import Department from './components/departments/department.vue'
import Designation from './components/designations/designation.vue'
import LeaveType from './components/settings/leaveTypes.vue'
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
        path: "/employee/:username/details",
        component: employeesDetails,
        meta: {
            forAuth: true
        }
    },
    {
        path: "/departments",
        component: Department,
        meta: {
            forAuth: true
        }
    },
    {
        path: "/designations",
        component: Designation,
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
    },
    {
        path: "/leave-types",
        component: LeaveType,
        meta: {
            forAuth: true
        }
    }
]
