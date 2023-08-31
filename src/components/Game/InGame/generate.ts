import { difficulty } from '../gameState'
import { lcm } from '../../../utils/lowestCommonMultiple'
import evaluatex from 'evaluatex/dist/evaluatex'

export function generateQuestion() {
	let question = ''

	// 1 Work out which operations are available for question based on selected difficulty
	let operations = []
	switch (difficulty.value) {
		case 'beginner':
			// Addition, subtraction, multiplication
			operations = ['+', '-', '*', '/']
			break
		case 'intermediate':
			// Powers, roots, addition, subtraction, multiplication
			operations = ['^', 'sqrt', '+', '-', '*', '/']
			break
		case 'advanced':
			// Logarithms, Trigonometry, powers, roots, addition, subtraction, multiplication
			operations = ['log', 'sin', 'cos', 'tan', '^', 'sqrt', '+', '-', '*', '/']
			break
	}

	// 2 Generate how many parts to the equation there will be
	let numberOfParts = 0
	switch (difficulty.value) {
		case 'beginner':
			numberOfParts = Math.floor(Math.random() * 2) + 1
			break
		case 'intermediate':
			numberOfParts = Math.floor(Math.random() * 3) + 1
			break
		case 'advanced':
			numberOfParts = Math.floor(Math.random() * 2) + 2
			break
	}

	// 3 Generate the question
	// 3.1 Filter down operations to ones that make sense for the question length (e.g. cant just be a + or -)
	const limitedOperations = operations.filter((operation) => {
		if (numberOfParts === 1) {
			return operation === 'log' || operation === 'sqrt' || operation === '^' || operation === 'sin' || operation === 'cos' || operation === 'tan' || operation === '/'
		} else return true
	})
	// 3.2 Loop through parts and build question
	// - for each part an operation is chosen random numbers are generated and inserted into the question using the operation
	// - the insertIndex is used to keep track of where the next part should be inserted
	// - lastPartBracket is used to keep track of whether the last part was a bracket (so that the next part should not be prefixed with a +)
	let insertIndex = 0
	let lastPartBracket = false
	for (let i = 0; i < numberOfParts; i++) {
		const operation = limitedOperations[Math.floor(Math.random() * limitedOperations.length)]
		switch (operation) {
			case '+': {
				const random1 = Math.floor(Math.random() * 151) + 1
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{${random1}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case '-': {
				const random2 = Math.floor(Math.random() * 151) + 1
				question = question.substring(0, insertIndex) + `${i !== 0 ? '-' : ''}{${random2}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case '*': {
				const random3 = Math.floor(Math.random() * 13) + 1
				if (i === 0) {
					question = question.substring(0, insertIndex) + `${random3}()` + question.substring(insertIndex)
					insertIndex = question.length - 1
					lastPartBracket = true
				} else {
					question = question.substring(0, insertIndex) + `${!lastPartBracket ? '\\times' : ''}{${random3}}` + question.substring(insertIndex)
					insertIndex = question.length
					lastPartBracket = false
				}
				break
			}
			case '/': {
				// Fractions are carefully generated using the lowest common multiple of random numbers to ensure the fraction works out to be a whole number
				const random4 = Math.floor(Math.random() * 16) + 1
				const random5 = Math.floor(Math.random() * 13) + 1
				const numerator = lcm(random4, random5)
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{\\frac{${numerator}}{${Math.min(random4, random5)}}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case '^': {
				const base = Math.floor(Math.random() * 13) + 1
				const power = Math.floor(Math.random() * 3) + 1
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{${base}^{${power}}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case 'sqrt': {
				const random6 = Math.floor(Math.random() * 13) + 1
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{\\sqrt{${random6 ** 2}}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case 'log': {
				const base = Math.floor(Math.random() * 13) + 1
				const power = Math.floor(Math.random() * 4)
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{logn(${base ** power},${base})}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case 'sin': {
				// Trig functions are chosen from a small variety to ensure they are rational values that can be worked out without a calculator
				const exactSineEquations = ['\\sin{0}', '\\sin{\\frac{PI}{6}}', '\\sin{\\frac{PI}{2}}']
				const random7 = Math.floor(Math.random() * exactSineEquations.length)
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{${exactSineEquations[random7]}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case 'cos': {
				// Trig functions are chosen from a small variety to ensure they are rational values that can be worked out without a calculator
				const exactSineEquations = ['\\cos{0}', '\\cos{\\frac{PI}{3}}', '\\cos{\\frac{PI}{2}}']
				const random8 = Math.floor(Math.random() * exactSineEquations.length)
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{${exactSineEquations[random8]}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
			case 'tan': {
				// Trig functions are chosen from a small variety to ensure they are rational values that can be worked out without a calculator
				const exactSineEquations = ['\\tan{0}', `\\tan{\\frac{PI}{4}}`]
				const random9 = Math.floor(Math.random() * exactSineEquations.length)
				question = question.substring(0, insertIndex) + `${i !== 0 && !lastPartBracket ? '+' : ''}{${exactSineEquations[random9]}}` + question.substring(insertIndex)
				insertIndex = question.length
				lastPartBracket = false
				break
			}
		}
	}

	// Evaluate answer using evaluatex
	const answer = evaluatex(question, {}, { latex: true })()
	// Many replaceAll calls are used to convert the format of the question from the latex/ascii format that evalutex uses to the latex format that katex uses
	question = question
		.replaceAll(`\\frac{PI}{6}`, '30')
		.replaceAll(`\\frac{PI}{4}`, '45')
		.replaceAll(`\\frac{PI}{2}`, '90')
		.replaceAll(`\\frac{PI}{3}`, '60')
		.replaceAll(/logn\((\d*),(\d*)\)/g, '\\log_{$2}{$1}')
		.replaceAll(`PI`, '180')

	return { question: `\\displaystyle ${question}=?`, answer: `${answer}` }
}
