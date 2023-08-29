<template>
	<n-space style="padding-top: 10%" align="center" justify="center">
		<n-card
			><n-equation class="equation" :katex-options="katexOptions" :value="currentQuestionKatex" /><n-button @click="skipQuestion" type="error" style="margin-top: 20px"
				>Skip Question (-6 seconds)</n-button
			></n-card
		>

		<n-card
			><n-input autofocus placeholder="Enter Answer" v-model:value="answer" />
			<n-grid style="padding-top: 10px" :cols="3" x-gap="5px" y-gap="5px">
				<n-grid-item v-for="n in 9"
					><n-button block :keyboard="false" @click="answer = answer.concat(`${n}`)">{{ n }}</n-button></n-grid-item
				>
				<n-grid-item><n-button block :keyboard="false" @click="clearAnswer">x</n-button></n-grid-item>
				<n-grid-item><n-button block :keyboard="false" @click="answer = answer.concat('0')">0</n-button></n-grid-item>
				<n-grid-item><n-button block :keyboard="false" attr-type="submit" @click="submitAnswer">/</n-button></n-grid-item>
			</n-grid></n-card
		>
	</n-space>
</template>

<script setup lang="ts">
import { NSpace, NEquation, NCard, NInput, NButton, NGrid, NGridItem } from 'naive-ui'
import { KatexOptions } from 'katex'
import { activeKeyUpListeners } from '../../Keybinds/listeners'
import { onMounted, onUnmounted, ref } from 'vue'
import { currentGameState, currentQuestionAnswer, currentQuestionKatex, gameTime, score } from '../gameState'
import { generateQuestion } from './generate'

const answer = ref('')

const katexOptions: KatexOptions = {
	displayMode: true,
	throwOnError: false,
	output: 'mathml'
}

onMounted(() => {
	const enterListener = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && currentGameState.value === 'playing') {
			submitAnswer()
		}
		if (e.key === 'Delete' && currentGameState.value === 'playing') {
			clearAnswer()
		}
	}
	window.addEventListener('keyup', enterListener)
	activeKeyUpListeners.push(enterListener)
})
onUnmounted(() => {
	for (const listener of activeKeyUpListeners) {
		window.removeEventListener('keyup', listener)
	}
})

function submitAnswer() {
	if (answer.value === currentQuestionAnswer.value) {
		console.log('Correct')
		score.value += 1
		clearAnswer()
		newQuestion()
	} else {
		console.log('Incorrect')
	}
}
function clearAnswer() {
	answer.value = ''
}
function newQuestion() {
	const { question, answer } = generateQuestion()
	currentQuestionAnswer.value = answer
	currentQuestionKatex.value = question
}

function skipQuestion() {
	gameTime.value -= 6000
	newQuestion()
}

newQuestion()
</script>

<style scoped>
.equation {
	font-size: 3em;
}
</style>
