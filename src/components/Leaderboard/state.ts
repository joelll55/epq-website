import { reactive } from 'vue'

export interface ILeaderboardState {
	data: {
		beginner: ILeaderboardEntry[]
		intermediate: ILeaderboardEntry[]
		advanced: ILeaderboardEntry[]
	}
	highestScore: {
		beginner: number
		intermediate: number
		advanced: number
	}
}

interface ILeaderboardEntry {
	rank: number
	username: string
	score: number
}

export const leaderboardState: ILeaderboardState = reactive({
	data: {
		beginner: [],
		intermediate: [],
		advanced: []
	},
	highestScore: {
		beginner: 0,
		intermediate: 0,
		advanced: 0
	}
})
