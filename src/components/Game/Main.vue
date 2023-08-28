<template>
	<div>
		<GameMenu v-if="currentGameState === 'menu'" />
		<GameOver v-else-if="currentGameState === 'gameover'" />
		<InGame v-else-if="currentGameState === 'playing'" />
		<StartingGame v-else-if="currentGameState === 'starting'" />
	</div>
</template>

<script setup lang="ts">
import GameMenu from './Menu.vue'
import GameOver from './Gameover.vue'
import InGame from './InGame/Main.vue'

import { currentGameState } from './gameState'
import StartingGame from './StartingGame.vue'
import { onMounted, onUnmounted } from 'vue'
import { reset } from './InGame/start'
import { refreshLeaderboard } from '../Leaderboard/refresh'

// Reset when user click out of tab
onMounted(async () => {
	currentGameState.value = 'menu'
	reset()

	// Reload this here so latest high score is shown
	await refreshLeaderboard()
})
onUnmounted(() => {
	currentGameState.value = 'menu'
	reset()
})
</script>
