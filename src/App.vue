<template>
	<!-- TODO: create a custom colour theme -->
	<n-config-provider :theme="settingsState.isLightTheme ? null : darkTheme" :theme-overrides="settingsState.isLightTheme ? customLightTheme : darkTheme" :katex="katex">
		<n-global-style />
		<!-- GLOBAL KEYBINDS -->
		<div>
			<!-- Header -->
			<NavBar />
			<!-- Main page content -->
			<!-- TODO - wrap in something -->
			<div style="padding: 15px"><RouterView /></div>
		</div>
	</n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, darkTheme, NGlobalStyle } from 'naive-ui'
import NavBar from './components/NavBar/Main.vue'
import { settingsState } from './components/Settings/state'
import { customLightTheme } from './components/Theme/light'
import { customDarkTheme } from './components/Theme/dark'
import katex from 'katex'
</script>

<style scoped></style>
