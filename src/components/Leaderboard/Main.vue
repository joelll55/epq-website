<template>
	<n-tabs type="segment">
		<n-tab-pane name="beginner" tab="Beginner"><n-data-table :columns="columns" :data="leaderboardState.data['beginner']" :row-class-name="isUserClass"></n-data-table></n-tab-pane>
		<n-tab-pane name="intermediate" tab="Intermediate"><n-data-table :columns="columns" :data="leaderboardState.data['intermediate']" :row-class-name="isUserClass"></n-data-table></n-tab-pane>
		<n-tab-pane name="advanced" tab="Advanced"><n-data-table :columns="columns" :data="leaderboardState.data['advanced']" :row-class-name="isUserClass"></n-data-table></n-tab-pane>
	</n-tabs>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { NDataTable, NTabs, NTabPane } from 'naive-ui'
import { leaderboardState } from '../Leaderboard/state'
import { refreshLeaderboard } from '../Leaderboard/refresh'
import { RowData } from 'naive-ui/es/data-table/src/interface'
import { loggedInUser } from '../Login/isLoggedIn'

onMounted(async () => {
	await refreshLeaderboard()
})

function isUserClass(row: RowData) {
	if (row.username === loggedInUser.value) return 'is-user'
	else return ''
}

const columns = [
	{
		title: 'Rank',
		key: 'rank'
	},
	{
		title: 'Name',
		key: 'username'
	},
	{
		title: 'Score',
		key: 'score'
	}
]
</script>

<style scoped>
:deep(.is-user td) {
	font-weight: bold !important;
	text-decoration: dotted !important;
	text-decoration-line: underline !important;
}
</style>
