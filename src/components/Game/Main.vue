<template>
	<div>
		<div class="circles">
			<n-el tag="span" v-for="n in 10" />
		</div>
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

import { NEl, useThemeVars } from 'naive-ui'
import { currentGameState } from './gameState'
import StartingGame from './StartingGame.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { reset } from './InGame/start'
import { refreshLeaderboard } from '../Leaderboard/refresh'

const themeVars = useThemeVars()
const circlesColour = ref(themeVars.value.primaryColor)
watch(currentGameState, (newValue) => {
	circlesColour.value = newValue === 'gameover' ? themeVars.value.successColor : themeVars.value.primaryColor
})

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

<style scoped lang="css">
/* Adapted from https://alvarotrigo.com/blog/animated-backgrounds-css/ */
.circles {
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.circles span {
	position: absolute;
	display: block;
	width: 20px;
	height: 20px;
	background: v-bind(circlesColour);
	animation: animate 25s linear infinite;
	bottom: -150px;
}

.circles span:nth-child(1) {
	left: 25%;
	width: 80px;
	height: 80px;
	animation-delay: 0s;
}

.circles span:nth-child(2) {
	left: 10%;
	width: 20px;
	height: 20px;
	animation-delay: 2s;
	animation-duration: 12s;
}

.circles span:nth-child(3) {
	left: 70%;
	width: 20px;
	height: 20px;
	animation-delay: 4s;
}

.circles span:nth-child(4) {
	left: 40%;
	width: 60px;
	height: 60px;
	animation-delay: 0s;
	animation-duration: 18s;
}

.circles span:nth-child(5) {
	left: 65%;
	width: 20px;
	height: 20px;
	animation-delay: 0s;
}

.circles span:nth-child(6) {
	left: 75%;
	width: 110px;
	height: 110px;
	animation-delay: 3s;
}

.circles span:nth-child(7) {
	left: 35%;
	width: 150px;
	height: 150px;
	animation-delay: 7s;
}

.circles span:nth-child(8) {
	left: 50%;
	width: 25px;
	height: 25px;
	animation-delay: 15s;
	animation-duration: 45s;
}

.circles span:nth-child(9) {
	left: 20%;
	width: 15px;
	height: 15px;
	animation-delay: 2s;
	animation-duration: 35s;
}

.circles span:nth-child(10) {
	left: 85%;
	width: 150px;
	height: 150px;
	animation-delay: 0s;
	animation-duration: 11s;
}

@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
}
</style>
