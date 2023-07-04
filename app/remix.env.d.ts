/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

export type WeatherData = {
	location: {
		name: String
	}
	current: {
		condition: {
			text: String
			code: number
		}
		temp_c: number
		humidity: number
		precip_mm: number
	}
}

export type DBResponse = {
	name: string
	cityId: string
}

export type TInputBox = {
	className: string
	title: string
	placeholder: string
	name: string
	type?: string
}

export type TButton = {
	label: string
	type: string
	className: string
	name?: string
	value?: string
	disabled?: boolean
}
