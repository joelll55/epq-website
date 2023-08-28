import MathsIcon from '../Icons/MathsIcon.vue'
import RootIcon from '../Icons/RootIcon.vue'
import LogarithmIcon from '../Icons/LogarithmIcon.vue'
import TrigIcon from '../Icons/TrigIcon.vue'
import { Difficulty } from './gameState'
import { ThemeCommonVars } from 'naive-ui'

export const difficultyInfo: { [D in Difficulty]: { icon: any; name: string; colour: keyof ThemeCommonVars }[] } = {
	beginner: [
		{
			icon: MathsIcon,
			name: 'Addition, Subtraction, Multiplication and Division',
			colour: 'successColor'
		}
	],
	intermediate: [
		{
			icon: MathsIcon,
			name: 'Addition, Subtraction, Multiplication and Division',
			colour: 'successColor'
		},
		{
			icon: RootIcon,
			name: 'Powers and Roots',
			colour: 'warningColor'
		}
	],
	advanced: [
		{
			icon: MathsIcon,
			name: 'Addition, Subtraction, Multiplication and Division',
			colour: 'successColor'
		},
		{
			icon: RootIcon,
			name: 'Powers and Roots',
			colour: 'warningColor'
		},
		{
			icon: LogarithmIcon,
			name: 'Logarithms',
			colour: 'errorColor'
		},
		{
			icon: TrigIcon,
			name: 'Trigonometry',
			colour: 'errorColor'
		}
	]
}
