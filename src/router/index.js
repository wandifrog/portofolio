import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import PantauTiket from '../components/PantauTiket.vue'
import Pegipegi from '../components/Pegipegi.vue'
import SMSGateway from '../components/SMSGateway.vue'
import T9Vue from '../components/T9Vue.vue'
import Enterkomputer from '../components/Enterkomputer.vue'
import Crud from '../components/Crud.vue'
import ChatApp from '../components/ChatApp.vue'
import PSUCalc from '../components/PSUCalc.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/enterkomputer',
            component: Enterkomputer
        },
        {
            path: '/chatapp',
            component: ChatApp
        },
        {
            path: '/smsgateway',
            component: SMSGateway
        },
        {
            path: '/t9vue',
            component: T9Vue
        },
        {
            path: '/pegipegi',
            component: Pegipegi
        },
        {
            path: '/crud',
            component: Crud
        },
        {
            path: '/psucalc',
            component: PSUCalc
        },
        {
            path: '/pantautiket',
            component: PantauTiket
        }
    ]
})