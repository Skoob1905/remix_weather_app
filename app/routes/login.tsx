import { Form, useActionData } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { ActionArgs, ActionFunction } from '@remix-run/node'
import InputBox from 'components/InputBox'
import { createUserSession } from 'session'
import Button from 'components/Button'
import 'global.css'

export const action: ActionFunction = async ({ request }: ActionArgs) => {
	const formData = await request.formData()

	const username = formData.get('username') as string
	const password = formData.get('password') as string

	// ignoring trailing/leading whitespaces, are credentials correct?
	const isSuccess =
		username.trim() === 'ipgautomotive' && password.trim() === 'carmaker'

	if (isSuccess) return createUserSession({ request, userId: username })

	return json({ status: 403 })
}

export default function login() {
	const actionData = useActionData<typeof action>()
	return (
		<Form
			method="post"
			style={{
				width: '14rem',
				margin: '5rem auto',
			}}
		>
			<InputBox
				className="input"
				title="Username"
				placeholder="username"
				name="username"
			/>
			<InputBox
				className="input"
				title="Password"
				placeholder="password"
				name="password"
				type="password"
			/>
			<Button
				label="Log in"
				type="submit"
				className="button"
				style={{ margin: '1rem 5rem' }}
			/>
			{actionData?.status ? (
				<p className="error">Invalid Username or Password</p>
			) : null}
		</Form>
	)
}
