export async function leaderboardRequest(mode: string, username?: string, score?: number, difficulty?: string) {
	const request = {
		method: 'POST',
		body: JSON.stringify({
			mode,
			username,
			score,
			difficulty
		}),
		headers: {
			'Content-type': 'text/plain'
		}
	}

	const res = await fetch('https://joelepq.pagekite.me/leaderboard', request)
	const jsonRes = await res.json()
	console.log(jsonRes.message)

	return jsonRes.leaderboard
}
