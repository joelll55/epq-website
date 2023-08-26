<template>
	<n-space justify="space-around"><n-countdown :duration="3000" :precision="0" :active="currentGameState == 'starting'" :render="renderCountdown" :on-finish="startGame" /></n-space>
</template>

<script setup lang="ts">
import { NSpace, NCountdown, CountdownProps } from 'naive-ui'
import { currentGameState } from './gameState'
import { h } from 'vue'
import { startGame } from './InGame/start'

const renderCountdown: CountdownProps['render'] = ({ seconds }) => {
	return [
		h(
			'span',
			{
				style: 'display: inline-block; font-size: 98px; font-weight: bold; padding-top: 25%;'
			},
			[String(seconds).padStart(2, '0')]
		)
	]
}
</script>
