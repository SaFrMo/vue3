import Vue from 'vue'
import Router from 'vue-router'
import UI from '@/vue/components/UI'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'UI',
            component: UI
        }
    ]
})
