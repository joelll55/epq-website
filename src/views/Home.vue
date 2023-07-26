<template>
	<main>
		<n-layout has-sider class="main-layout" sider-placement="right">
			<n-layout-content class="main-layout-content"
				><h1>Maths Trainer</h1>
				<p style="padding-top: 5px; padding-bottom: 15px">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<n-button style="margin-right: 20px" type="primary"
					><template #icon><PlayIcon /></template><span>Play!</span></n-button
				>
				<n-button type="info" @click="$router.push('/leaderboard')"
					><template #icon><LeaderboardIcon /></template><span>View Leaderboard</span></n-button
				>
			</n-layout-content>
			<n-layout-sider> IMAGE PLACEHOLDER </n-layout-sider>
		</n-layout>
	</main>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent, NButton } from 'naive-ui'
import PlayIcon from '../components/Icons/PlayIcon.vue'
import LeaderboardIcon from '../components/Icons/LeaderboardIcon.vue'
</script>

<style scoped>
.main-layout {
	margin: 10%;
	padding: 10px;
}
.main-layout-content {
	padding: 24px;
}
h1 {
	font-size: 4em;
}
</style>
