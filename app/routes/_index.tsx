import { redirect } from '@remix-run/node'

// redirect user to login page

export const loader = async () => {
	return redirect('/login')
}
