const Button = ({ label, ...buttonProps }) => {
	return (
		<button {...buttonProps}>
			<b>{label}</b>
		</button>
	)
}

export default Button
