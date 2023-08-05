<template>
	<main>
		<n-layout class="main-layout">
			<n-layout-content class="main-layout-content"
				><n-space vertical align="center" item-style="width: 50%"
					><h1>Login/Register</h1>
					<n-input type="text" placeholder="Username" />
					<n-input type="password" show-password-on="click" placeholder="Password" />
					<n-space><n-button type="primary">Login</n-button><n-button type="info">Register</n-button></n-space></n-space
				>
			</n-layout-content>
		</n-layout>
	</main>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NInput, NSpace, NButton } from 'naive-ui'
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
