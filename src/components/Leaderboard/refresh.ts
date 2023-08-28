import { Difficulty } from '../Game/gameState'
import { leaderboardRequest } from './main'
import { leaderboardState } from './state'

export async function refreshLeaderboard() {
	leaderboardState.data = await leaderboardRequest('get')

	for (const d of ['beginner', 'intermediate', 'advanced'] as Difficulty[]) {
		leaderboardState.highestScore[d] = leaderboardState.data[d].find((e) => e.rank === 1)?.score ?? 0
	}
	console.log('Refreshed Leaderboard', leaderboardState)
}
