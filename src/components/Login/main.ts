import { isLoggedIn, loggedInUser } from './isLoggedIn'

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

	// TODO: Change this to the real API
	const res = await fetch('http://localhost:8000/login', request)
	const jsonRes = await res.json()
	jsonRes.message ??= 'Login failed'

	switch (jsonRes.message) {
		case 'Login successful':
			console.log('Login successful')
			isLoggedIn.value = true
			loggedInUser.value = username
			return true
		case 'Username already exists':
			console.log('Username already exists')
			return false
		case 'Login failed':
			console.log('Login failed')
			return false
		default:
			console.log('Unknown error')
			return false
	}
}
