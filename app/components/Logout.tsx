import { Form } from '@remix-run/react'

const Logout = () => {
	return (
		<Form
			action="/logout"
			method="post"
		>
			<button
				type="submit"
				className="button"
			>
				<b>Logout</b>
			</button>
		</Form>
	)
}

export default Logout
