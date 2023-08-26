import { currentGameState } from '../gameState'

export async function startGame() {
	reset()
	// TODO - set up game

	// Set the current game state to 'playing' so the game ui appears
	setTimeout(() => {
		currentGameState.value = 'playing'
	}, 1000)
}

export function reset() {}
