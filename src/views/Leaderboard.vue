<template>
	<div>
		<n-tabs type="segment">
			<n-tab-pane name="beginner" tab="Beginner"><n-data-table :columns="columns" :data="beginnerData"></n-data-table></n-tab-pane>
			<n-tab-pane name="intermediate" tab="Intermediate"><n-data-table :columns="columns" :data="intermediateData"></n-data-table></n-tab-pane>
			<n-tab-pane name="advanced" tab="Advanced"><n-data-table :columns="columns" :data="advancedData"></n-data-table></n-tab-pane>
		</n-tabs>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { NDataTable, NTabs, NTabPane } from 'naive-ui'

const beginnerData = [{ rank: 1, name: 'test', score: 10000 }]
const intermediateData = [
	{ rank: 1, name: 'test', score: 1000 },
	{ rank: 2, name: 'test1', score: 500 }
]
const advancedData = [{ rank: 1, name: 'test', score: 100 }]

onMounted(() => {
	console.log('Load Leaderboard')
	// TODO: load leaderboard from server
})

const columns = [
	{
		title: 'Rank',
		key: 'rank'
	},
	{
		title: 'Name',
		key: 'name'
	},
	{
		title: 'Score',
		key: 'score'
	}
]
</script>
