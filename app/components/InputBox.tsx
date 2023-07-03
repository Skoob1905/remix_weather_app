import React from 'react'

type TInputBox = {
	title: string
	placeholder: string
	name: string
	type?: string
}

const InputBox = ({ title, ...restProps }: TInputBox) => {
	return (
		<div>
			{title}
			<input {...restProps} />
		</div>
	)
}

export default InputBox
