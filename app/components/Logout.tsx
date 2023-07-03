import { Form } from '@remix-run/react'
import Button from './Button'

const Logout = () => {
	return (
		<Form
			action="/logout"
			method="post"
		>
			<Button
				label="Logout"
				type="submit"
				className="button"
			/>
		</Form>
	)
}

export default Logout
