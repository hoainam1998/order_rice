import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home'
import Success from './views/Success'

Vue.use(Router)

const router=new Router({
    routes:[
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/success",
            name: "success",
            component: Success
        }
    ]
})

export default router;