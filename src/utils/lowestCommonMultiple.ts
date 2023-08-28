export function lcm(num1: number, num2: number) {
	let hcf = 10000

	for (let i = 1; i <= num1 && i <= num2; i++) {
		if (num1 % i == 0 && num2 % i == 0) {
			hcf = i
		}
	}

	return (num1 * num2) / hcf
}
