import Home from '../components/Home/Main.vue'
import Play from '../components/Game/Main.vue'
import Login from '../components/Login/Main.vue'
import Leaderboard from '../components/Leaderboard/Main.vue'

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
