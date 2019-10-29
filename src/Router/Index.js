import Vue from 'vue'
import Router from 'vue-router'
import PlayerInfo from '@/components/PlayerInfo'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        
        {
            path: '/players/',
            name: 'PlayerInfo',
            component: PlayerInfo
        },

        {
            path: '/players/:id',
            name: 'PlayerInfo',
            props: true,
            component: PlayerInfo
        }
    ]

})