<template>
	<main>
		<!-- TODO: change this page when logged in -->
		<n-layout class="main-layout">
			<n-layout-content class="main-layout-content"
				><n-space vertical align="center" item-style="width: 50%"
					><h1>Login/Register</h1>
					<n-input type="text" placeholder="Username" v-model:value="username" />
					<n-input type="password" show-password-on="click" placeholder="Password" v-model:value="password" />
					<n-space
						><n-button type="primary" @click="login()" :loading="isLoading" :disabled="!validInput">Login</n-button
						><n-button type="info" @click="register()" :loading="isLoading" :disabled="!validInput">Register</n-button></n-space
					></n-space
				>
			</n-layout-content>
		</n-layout>
	</main>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NInput, NSpace, NButton } from 'naive-ui'
import { userLoginRequest } from '../components/Login/main'
import { computed, ref } from 'vue'

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
</script>

<style scoped>
.main-layout {
	margin: 10%;
	padding: 10px;
}
.main-layout-content {
	padding: 24px;
}
</style>
