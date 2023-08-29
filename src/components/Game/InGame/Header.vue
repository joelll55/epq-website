<template>
	<n-layout has-sider sider-placement="right" content-style="align-items: center;">
		<n-layout-content
			><n-progress
				:status="score < 5 ? 'error' : 'success'"
				type="line"
				:percentage="Math.round((score / Math.max(leaderboardState.highestScore[difficulty], 5)) * 100)"
				:indicator-text-color="themeVars.textColor1"
				:height="32"
				:border-radius="4"
				>Score: {{ score }}
			</n-progress>
		</n-layout-content>
		<n-layout-sider class="bg-remove" content-style="padding-left: 40%;"
			><n-progress :status="gameTime <= 15000 ? 'error' : 'info'" type="dashboard" gap-position="bottom" :percentage="Math.round((gameTime / 60000) * 100)">{{
				msToTime(gameTime)
			}}</n-progress></n-layout-sider
		>
	</n-layout>
</template>

<script setup lang="ts">
import { NProgress, NLayout, NLayoutContent, NLayoutSider, useThemeVars } from 'naive-ui'
import { gameTime, currentGameState, score, difficulty, pregameUserHighScore, pregameHighestScore } from '../gameState'
import { onMounted } from 'vue'
import { msToTime } from '../../../utils/msToTime'
import { leaderboardState } from '../../Leaderboard/state'
import { loggedInUser } from '../../Login/isLoggedIn'

const themeVars = useThemeVars()

onMounted(async () => {
	// Start game clock
	const intervalId = setInterval(() => {
		gameTime.value -= 100

		if (gameTime.value <= 0) {
			currentGameState.value = 'gameover'
			clearInterval(intervalId)
		}
	}, 100)

	pregameUserHighScore.value = leaderboardState.data[difficulty.value].find((user) => user.username === loggedInUser.value)?.score ?? 0
	pregameHighestScore.value = leaderboardState.highestScore[difficulty.value]
})
</script>

<style scoped>
.bg-remove {
	background-color: var(--background-color);
}
</style>
