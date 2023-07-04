import { TInputBox } from 'remix.env'

const InputBox = ({ title, ...restProps }: TInputBox) => {
	return (
		<div>
			<b>{title}</b>
			<input {...restProps} />
		</div>
	)
}

export default InputBox
