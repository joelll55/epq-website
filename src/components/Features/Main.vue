<template>
	<n-layout has-sider class="main-layout">
		<n-layout-sider width="275"> <n-image :src="props.image" width="275" style="margin-block: 10%" /> </n-layout-sider>
		<n-layout-content class="main-layout-content"
			><h2>{{ props.title }}</h2>
			<p style="padding-bottom: 15px">
				{{ props.description }}
			</p>
		</n-layout-content>
	</n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent, NImage } from 'naive-ui'

const props = defineProps(['title', 'description', 'image'])
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
</style>
