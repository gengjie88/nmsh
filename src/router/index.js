import Vue from 'vue'
import Router from 'vue-router'
import Childpage from '../page/Childpage'
import Homepage from '../page/Homepage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/Childpage',
        name: 'Childpage',
        component: Childpage
    }, {
        path: '/',
        name: 'Homepage',
        component: Homepage
    }]
})