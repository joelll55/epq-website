<template>
	<main>
		<!--Top section-->
		<n-layout has-sider class="main-layout" sider-placement="right">
			<n-layout-content class="main-layout-content"
				><h1>Maths Trainer</h1>
				<p style="padding-bottom: 15px">Hi! Welcome to Maths Trainer where you will practice your maths skills and compete with others to be the best. Have fun!</p>
				<n-button @click="$router.push('/play')" style="margin-right: 20px" type="primary" size="large"
					><template #icon><PlayIcon /></template><span>Play!</span></n-button
				>
				<n-button type="info" @click="$router.push('/leaderboard')" size="large"
					><template #icon><LeaderboardIcon /></template><span>View Leaderboard</span></n-button
				>
			</n-layout-content>
			<n-layout-sider class="bg-remove"><MathsIcon /></n-layout-sider>
		</n-layout>

		<n-divider />

		<Feature v-for="feature in homePageFeatures" :title="feature.title" :description="feature.description" :image="feature.image" />
	</main>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent, NButton, NDivider } from 'naive-ui'
import PlayIcon from '../components/Icons/PlayIcon.vue'
import LeaderboardIcon from '../components/Icons/LeaderboardIcon.vue'
import Feature from '../components/Features/Main.vue'
import { homePageFeatures } from '../components/Features/features'
import MathsIcon from '../components/Icons/MathsIcon.vue'
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
	font-size: 5em;
}

.bg-remove {
	background-color: var(--background-color);
}
</style>
