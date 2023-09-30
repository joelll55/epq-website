import { isLoggedIn, loggedInUser, loggedInUserData } from './isLoggedIn'
import { failedLoginMessage, hasFailedLogin } from './loginFailure'

export async function userLoginRequest(username: string, password: string, createAccount = false) {
	const request = {
		method: 'POST',
		body: JSON.stringify({
			username,
			password,
			isRegister: createAccount
		}),
		headers: {
			'Content-type': 'text/plain'
		}
	}

	const res = await fetch('https://joelepq.pagekite.me/login', request)
	const jsonRes = await res.json()
	jsonRes.message ??= 'Login failed'

	switch (jsonRes.message) {
		case 'Login successful':
			console.log('Login successful')
			isLoggedIn.value = true
			loggedInUser.value = username
			loggedInUserData.value = jsonRes.userData
			hasFailedLogin.value = false
			failedLoginMessage.value = ''
			break
		case 'Username already exists': {
			const message = 'Username already exists'
			console.log(message)
			hasFailedLogin.value = true
			failedLoginMessage.value = message
			break
		}
		case 'Login failed': {
			const message = 'Invalid Username or Password'
			console.log(message)
			hasFailedLogin.value = true
			failedLoginMessage.value = message
			break
		}
		default: {
			const message = 'Unknown error'
			console.log(message)
			hasFailedLogin.value = true
			failedLoginMessage.value = message
			break
		}
	}
}
