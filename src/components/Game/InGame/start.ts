import { currentGameState, gameTime, score } from '../gameState'

export async function startGame() {
	reset()
	// TODO - set up game

	// Set the current game state to 'playing' so the game ui appears and game starts
	setTimeout(() => {
		currentGameState.value = 'playing'
	}, 1000)
}

export function reset() {
	gameTime.value = 60000
	score.value = 0
}
