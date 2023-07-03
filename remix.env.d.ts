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
