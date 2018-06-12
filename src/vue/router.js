import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/vue/components/FrontPage'
import Level from '@/vue/components/Level'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage
        },
        {
            path: '/:slug',
            name: 'Level',
            component: Level
        }
    ]
})
