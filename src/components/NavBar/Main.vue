<template>
	<n-layout has-sider>
		<n-layout-sider :native-scrollbar="false" width="6%" class="bg-remove"><MathsIcon @click="$router.push('/')" style="max-height: 64px" /> </n-layout-sider>
		<n-layout-content content-style="max-height: 70px;" :native-scrollbar="false"
			><n-card>
				<span class="title">Maths Trainer</span>
				<span style="margin-inline: 20%">
					<span v-for="(route, index) in routes" :key="route.name">
						<router-link :to="route.path" :class="$route.path == route.path ? 'selected nav-element' : 'nav-element'">{{ route.name }}</router-link>
						<n-divider v-if="index != routes.length - 1" vertical />
					</span> </span
				><n-space />
				<!-- TODO - Only show this once logged in, display username -->
				<n-tooltip placement="bottom-end" trigger="click" v-if="isLoggedIn"
					><template #trigger
						><n-button type="secondary" size="small" circle style="margin-right: 4px"
							><n-icon><AccountIcon /></n-icon></n-button></template
					><n-space vertical
						><span>Logged in as: {{ loggedInUser }}</span> <n-button type="error" @click="logOut">Log Out</n-button></n-space
					></n-tooltip
				>
				<n-tooltip placement="bottom-end" trigger="click"
					><template #trigger
						><n-button size="small" circle
							><n-icon><SettingsIcon /></n-icon></n-button></template
					><n-switch style="padding: 4px" @update:value="toggleTheme" :value="settingsState.isLightTheme"
						><template #unchecked>Dark Theme</template><template #checked>Light Theme</template>
						<template #unchecked-icon><DarkIcon /></template>
						<template #checked-icon><LightIcon /></template> </n-switch></n-tooltip></n-card
		></n-layout-content>
	</n-layout>
</template>

<script setup>
import { NCard, NDivider, NLayout, NLayoutContent, NLayoutSider, NIcon, NButton, NSpace, NTooltip, NSwitch } from 'naive-ui'
import MathsIcon from '../Icons/MathsIcon.vue'
import SettingsIcon from '../Icons/SettingsIcon.vue'
import DarkIcon from '../Icons/DarkIcon.vue'
import LightIcon from '../Icons/LightIcon.vue'
import { routes } from '../../router/routes.ts'
import { settingsState } from '../Settings/state.ts'
import AccountIcon from '../Icons/AccountIcon.vue'
import { isLoggedIn, loggedInUser } from '../Login/isLoggedIn'

function toggleTheme() {
	settingsState.isLightTheme = !settingsState.isLightTheme
}

function logOut() {
	isLoggedIn.value = false
	loggedInUser.value = ''
}
</script>

<style scoped>
.nav-element {
	font-size: medium;
	margin-inline: 1em;
	color: var(--primary-color);
	background-color: transparent;
}
.selected {
	border-bottom-width: 3px;
	padding-bottom: 4px;
	padding-inline: 4px;
	border-bottom-style: solid;
}

.title {
	font-size: medium;
	font-weight: bold;
	margin-inline: 0.5em;
}

.bg-remove {
	max-height: 70px;
	background-color: var(--background-color);
}
</style>
