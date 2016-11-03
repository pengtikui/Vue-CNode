import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/all'
        },
        {
            path: '/:tab',
            component: function(resolve) {
                require(['./views/home'], resolve)
            }
        },
        {
            path: '/topic/:id',
            name: 'topic',
            component: function(resolve) {
                require(['./views/topic'], resolve)
            }
        }
    ]
})