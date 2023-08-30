import { ThemeCommonVars } from 'naive-ui'

export const customLightTheme: { common: Partial<ThemeCommonVars> } = {
	common: {
		primaryColor: '#6B7CEB',
		primaryColorHover: '#7284F7', // shade D
		primaryColorPressed: '#31396B', // shade B
		primaryColorSuppl: '#606FD1', // shade E

		errorColor: '#A065F6',
		errorColorHover: '#231636',
		errorColorPressed: '#4C3075',
		errorColorSuppl: '#8E5ADB',

		warningColor: '#6857D4',
		warningColorHover: '#6E5CE0',
		warningColorPressed: '#292354',
		warningColorSuppl: '#5B4CBA',

		infoColor: '#5788D4',
		infoColorHover: '#5C91E0',
		infoColorPressed: '#233654',
		infoColorSuppl: '#4C78BA',

		successColor: '#65C5F6',
		successColorHover: '#162B36',
		successColorPressed: '#305E75',
		successColorSuppl: '#5AB0DB',

		textColorBase: '#OF1224',
		cardColor: '#D2D7ED',
		tabColor: '#B7B4D6'
	}
}
