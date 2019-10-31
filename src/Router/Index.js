import Vue from 'vue'
import Router from 'vue-router'
import PlayerInfo from '@/components/PlayerInfo'
import Registration from '@/components/Registration'
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
            path: '/players/:playerKey',
            name: 'PlayerInfo',
            props: true,
            component: PlayerInfo
        },

        {
            path: '/registration',
            name: 'Registration',
            component: Registration        
        },
    ]

})