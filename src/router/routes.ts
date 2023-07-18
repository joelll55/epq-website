import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Login from '../views/Login.vue'
import Leaderboard from '../views/Leaderboard.vue'

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/play',
        name: 'Play',
        component: Play
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
    }
]
