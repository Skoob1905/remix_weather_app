import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { logout } from 'session'

// This page will handle the 'logging out', so anyone redirected to can be logged out by
// redirecting back to login and then deleting the cookie in storage

export async function action({ request }: ActionArgs) {
	return logout(request)
}

export async function loader() {
	return redirect('/login')
}
