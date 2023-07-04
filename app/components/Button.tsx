import { TButton } from 'remix.env'

const Button = ({ label, ...buttonProps }: TButton) => {
	return (
		<button {...buttonProps}>
			<b>{label}</b>
		</button>
	)
}

export default Button
