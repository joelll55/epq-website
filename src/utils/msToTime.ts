export function msToTime(time: number) {
	const ms = time % 1000
	time = (time - ms) / 1000
	const secs = time % 60
	time = (time - secs) / 60
	const mins = time % 60

	return mins + ':' + (secs.toString().length === 1 ? '0' + secs : secs)
}
