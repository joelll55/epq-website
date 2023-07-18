<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, darkTheme } from 'naive-ui'
import NavBar from './components/NavBar/Main.vue'
import { settingsState } from './components/Settings/state.ts'
import { customLightTheme } from './components/Theme/light.ts'
import { customDarkTheme } from './components/Theme/dark.ts'
</script>

<template>
	<!-- TODO: create a custom colour theme -->
	<n-config-provider :theme="settingsState.isLightTheme ? null : darkTheme" :theme-overrides="settingsState.isLightTheme ? customLightTheme : darkTheme">
		<div>
			<!-- Header -->
			<NavBar />
			<!-- Main page content -->
			<!-- TODO - wrap in something -->
			<div style="padding: 15px"><RouterView /></div>
		</div>
	</n-config-provider>
</template>

<style scoped></style>
