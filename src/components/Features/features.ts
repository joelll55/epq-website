/// <reference types="vite/client" />
import EasyToUse from '../../assets/easytouse.gif'
import Difficulties from '../../assets/difficulties.gif'
import Leaderboard from '../../assets/leaderboard.gif'

export const homePageFeatures = [
	{
		title: 'Easy to use',
		description: 'To get started simply register an account or login if you already have one, navigate to the "Play" page and select your skill level. Then you can start playing instantly!',
		image: EasyToUse
	},
	{
		title: 'Variety of difficulties',
		description:
			'Before you start playing you can select your skill level. This will modify how your unique questions are generated. There are three difficulties to choose from: beginner, intermediate and advanced.',
		image: Difficulties
	},
	{
		title: 'Competitive Leaderboards',
		description:
			"When you play you will be able to see your highest score and how it ranks against other player's high scores. The competition to reach and stay on the top will motivate you to keep playing and improving your score!",
		image: Leaderboard
	}
]
