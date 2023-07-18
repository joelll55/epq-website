<template>
	<n-layout has-sider>
		<n-layout-sider :native-scrollbar="false" width="6%" content-style="max-height: 70px;"><MathsIcon style="max-height: 70px" /> </n-layout-sider>
		<n-layout-content content-style="max-height: 70px;" :native-scrollbar="false"
			><n-card>
				<span class="title">EPQ Maths Website</span>
				<span style="margin-inline: 20%">
					<span v-for="(route, index) in routes" :key="route.name">
						<router-link :to="route.path" :class="currentRoute.path == route.path ? 'selected nav-element' : 'nav-element'">{{ route.name }}</router-link>
						<n-divider v-if="index != routes.length - 1" vertical />
					</span> </span
				><n-space />
				<n-tooltip placement="bottom-end" trigger="click"
					><template #trigger
						><n-button size="small" circle
							><n-icon><SettingsIcon /></n-icon></n-button></template
					><n-switch style="padding: 4px" @update:value="toggleTheme" :value="settingsState.isLightTheme"
						><template #unchecked>Dark Theme</template><template #checked>Light Theme</template>
						<template #unchecked-icon><DarkIcon /></template>
						<template #checked-icon><LightIcon /></template> </n-switch
				></n-tooltip> </n-card
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
import { useRoute } from 'vue-router'
import { settingsState } from '../Settings/state.ts'

const currentRoute = useRoute()

function toggleTheme() {
	settingsState.isLightTheme = !settingsState.isLightTheme
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
</style>
