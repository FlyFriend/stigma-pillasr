import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Copyright from '@/components/Copyright'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Timeline',
            component: Timeline,
        },
        {
            path: '/cp',
            name: 'Copyright',
            component: Copyright,
        }
    ]
})