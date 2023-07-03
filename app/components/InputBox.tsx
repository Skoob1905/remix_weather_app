import React from 'react'

type TInputBox = {
	className: string
	title: string
	placeholder: string
	name: string
	type?: string
}

const InputBox = ({ title, ...restProps }: TInputBox) => {
	return (
		<div>
			<b>{title}</b>
			<input {...restProps} />
		</div>
	)
}

export default InputBox
