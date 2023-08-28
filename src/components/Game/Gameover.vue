<template>
	<n-space style="padding-top: 15%" align="center" justify="center">
		<n-card>
			<n-space vertical
				><h1>Time's Up!</h1>
				<span
					>Your score was: <span class="score">{{ score }}</span></span
				>
				<span v-if="!isNewHighScore && !isNewUserHighScore">You did not achieve a new high score this time</span>
				<n-gradient-text type="success" v-if="isNewUserHighScore">You achieved a new high score!</n-gradient-text>
				<n-gradient-text type="warning" v-if="isNewHighScore">You acheived the #1 score for this difficulty!</n-gradient-text>
				<n-button type="info" @click="playAgain">Play Again</n-button></n-space
			>
		</n-card>
	</n-space>
</template>

<script setup lang="ts">
import { NSpace, NCard, NButton, NGradientText } from 'naive-ui'
import { currentGameState, difficulty, pregameHighestScore, pregameUserHighScore, score } from './gameState'
import { onMounted, ref } from 'vue'
import { reset } from './InGame/start'
import { leaderboardRequest } from '../Leaderboard/main'
import { loggedInUser } from '../Login/isLoggedIn'
import { refreshLeaderboard } from '../Leaderboard/refresh'

const isNewHighScore = ref(false)
const isNewUserHighScore = ref(false)

onMounted(async () => {
	await leaderboardRequest('add', loggedInUser.value, score.value, difficulty.value)
	await refreshLeaderboard()

	if (score.value > pregameHighestScore.value) {
		isNewHighScore.value = true
	}
	if (score.value > pregameUserHighScore.value) {
		isNewUserHighScore.value = true
	}
})

function playAgain() {
	currentGameState.value = 'menu'
	reset()
}
</script>

<style scoped>
.bg-remove {
	background-color: var(--background-color);
}

h1 {
	font-size: 2.5rem;
}
span {
	font-size: 1.5rem;
}

.score {
	font-weight: bold;
}
</style>
