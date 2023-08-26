<template>
	<n-space item-style="padding-top: 15%;" vertical justify="space-around" align="center"
		><n-space vertical>
			<n-button text :disabled="!isLoggedIn" style="font-size: 98px" @click="currentGameState = 'starting'">
				<!-- TODO: Make the colour change with theme -->
				<n-icon color="#5BE046"><PlayIcon /></n-icon><span>Press to Play!</span></n-button
			><n-el tag="span" class="error-message" v-if="!isLoggedIn" style="font-size: 32px">You must be logged in to play!</n-el>
		</n-space>
		<n-space vertical>
			<span style="font-size: 32px; font-weight: bold">Choose Your Skill Level</span>
			<n-button-group size="large"
				><n-button strong :secondary="difficulty != 'beginner'" type="success" round @click="difficulty = 'beginner'">Beginner</n-button
				><n-button strong round @click="difficulty = 'intermediate'" type="warning" :secondary="difficulty != 'intermediate'">Intermediate</n-button
				><n-button strong :secondary="difficulty != 'advanced'" type="error" round @click="difficulty = 'advanced'">Advanced</n-button></n-button-group
			>
		</n-space>
	</n-space>
</template>

<script setup lang="ts">
import { NSpace, NButton, NIcon, NButtonGroup, NEl } from 'naive-ui'
import PlayIcon from '../Icons/PlayIconFilled.vue'
import { currentGameState, difficulty } from './gameState'
import { isLoggedIn } from '../Login/isLoggedIn'
</script>

<style scoped>
.error-message {
	color: var(--error-color);
	padding-inline: 15%;
}
</style>
