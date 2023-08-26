import { Ref, ref } from 'vue'

export const highestScore: Ref<number> = ref(0)

export async function leaderboardRequest() {
	return {}
}
