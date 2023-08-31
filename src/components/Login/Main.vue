<template>
	<main>
		<!-- TODO: change this page when logged in -->
		<n-layout class="main-layout">
			<n-layout-content class="main-layout-content"
				><n-space vertical align="center" item-style="width: 50%" v-if="!isLoggedIn"
					><h1>Login/Register</h1>
					<n-input type="text" placeholder="Username" v-model:value="username" />
					<n-input type="password" show-password-on="click" placeholder="Password" v-model:value="password" />
					<n-el tag="span" class="error-message" v-if="hasFailedLogin">{{ failedLoginMessage }}</n-el>
					<n-space
						><n-button type="primary" @click="login()" :loading="isLoading" :disabled="!validInput">Login</n-button
						><n-button type="info" @click="register()" :loading="isLoading" :disabled="!validInput">Register</n-button></n-space
					></n-space
				>
				<span style="font-size: 5rem; text-align: center" v-else
					>Logged in as: <span style="font-weight: bold">{{ loggedInUser }}</span></span
				>
			</n-layout-content>
		</n-layout>
	</main>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NInput, NSpace, NButton, NEl } from 'naive-ui'
import { userLoginRequest } from '../Login/main'
import { isLoggedIn, loggedInUser } from '../Login/isLoggedIn'
import { hasFailedLogin, failedLoginMessage } from '../Login/loginFailure'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { activeKeyUpListeners } from '../Keybinds/listeners'

const username = ref('')
const password = ref('')
const isLoading = ref(false)

const validInput = computed(() => {
	return username.value.length > 0 && password.value.length > 0
})

async function login() {
	isLoading.value = true
	await userLoginRequest(username.value, password.value)
	isLoading.value = false
}
async function register() {
	isLoading.value = true
	await userLoginRequest(username.value, password.value, true)
	isLoading.value = false
}

// Add keybind for enter key
onMounted(() => {
	const enterListener = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && validInput.value) {
			login()
		}
	}
	window.addEventListener('keyup', enterListener)
	activeKeyUpListeners.push(enterListener)
})

// Remove keybind when either logged in or user goes off page
onUnmounted(() => {
	for (const listener of activeKeyUpListeners) {
		window.removeEventListener('keyup', listener)
	}
})
watch(isLoggedIn, (newValue) => {
	if (newValue) {
		for (const listener of activeKeyUpListeners) {
			window.removeEventListener('keyup', listener)
		}
	}
})
</script>

<style scoped>
.main-layout {
	margin: 10%;
	padding: 10px;
}
.main-layout-content {
	padding: 24px;
}

.error-message {
	color: var(--error-color);
}
</style>
