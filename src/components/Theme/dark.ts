import { ThemeCommonVars } from 'naive-ui'

export const customDarkTheme: { common: Partial<ThemeCommonVars> } = {
	common: {
		primaryColor: '#6B7CEB',
		primaryColorHover: '#7284F7', // shade D
		primaryColorPressed: '#31396B', // shade B
		primaryColorSuppl: '#606FD1', // shade E

		errorColor: '#A065F6',
		errorColorHover: '#8E5ADB', // shade E
		errorColorPressed: '#4C3075', // shade B
		errorColorSuppl: '#754AB5', // shade A

		warningColor: '#6857D4',
		warningColorHover: '#6E5CE0', // shade D
		warningColorPressed: '#292354', // shade B
		warningColorSuppl: '#5B4CBA', // shade E

		infoColor: '#5788D4',
		infoColorHover: '#5C91E0', // shade D
		infoColorPressed: '#233654', // shade B
		infoColorSuppl: '#4C78BA', // shade E

		successColor: '#65C5F6',
		successColorHover: '#5AB0DB', // shade E
		successColorPressed: '#162B36', // shade D
		successColorSuppl: '#4A91B5', // shade A

		textColorBase: '#OF1224',
		cardColor: '#121624'
	}
}
