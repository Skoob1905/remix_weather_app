import axios, { AxiosResponse } from 'axios'

const generateErrorMessage = (response: AxiosResponse<any, any>) => {
	return JSON.stringify(response)
}

const getApiResponse = async <TData, TResponse>(
	city: TData
): Promise<TResponse> => {
	const config = {
		method: 'GET',
		url: 'http://api.weatherapi.com/v1/current.json',
		params: {
			key: '26b4a8c76b1a491b878152532232806',
			q: city,
		},
	}

	const response = await axios.request(config)

	if (response.status >= 200 && response.status < 300) {
		return response.data
	}

	const error = new Error(generateErrorMessage(response))
	throw error
}

export default getApiResponse
