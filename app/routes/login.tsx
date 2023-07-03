import { Form, useActionData } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { ActionArgs, ActionFunction } from '@remix-run/node'
import InputBox from 'components/InputBox'
import { createUserSession } from 'session'
import Button from 'components/Button'
import 'styles/login.css'

export const action: ActionFunction = async ({ request }: ActionArgs) => {
	const formData = await request.formData()

	const username = formData.get('username') as string
	const password = formData.get('password') as string

	const isSuccess =
		username.trim() === 'ipgautomotive' && password.trim() === 'carmaker'

	if (isSuccess) return createUserSession({ request, userId: username })

	return json({ status: 403 })
}

export default function login() {
	const actionData = useActionData<typeof action>()
	return (
		<div className="login">
			<Form method="post">
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
				{actionData?.status ? <p>Invalid Username or Password</p> : null}
				<Button
					label="Log in"
					type="submit"
					className="button"
				/>
			</Form>
		</div>
	)
}
