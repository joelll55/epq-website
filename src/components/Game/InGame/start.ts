import { currentGameState, gameTime, score } from '../gameState'

export async function startGame() {
	reset()
	// Set the current game state to 'playing' so the game ui appears and game starts
	setTimeout(() => {
		currentGameState.value = 'playing'
	}, 1000)
}

export function reset() {
	// Trick to reset the game timer and clear the interval
	gameTime.value = 0
	score.value = 0

	setTimeout(() => {
		gameTime.value = 60000
	}, 300)
}
