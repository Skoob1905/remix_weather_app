import { getIconString } from 'utils/getIcon'
import { WeatherResponse } from 'routes/home'
import 'styles/home.css'

type TWeatherCardContainer = {
	weatherData: WeatherResponse[]
}

const WeatherCardContainer = ({ weatherData }: TWeatherCardContainer) => {
	return (
		<div className="weatherCardContainer">
			{weatherData.map((city: WeatherResponse, idx: number) => (
				<div
					key={idx}
					className="weatherCard"
				>
					<h4>{city.location.name}</h4>
					<img
						src={getIconString(city.current.condition.code)}
						alt="weatherLogo"
						style={{ display: 'inline-block' }}
					/>
					<b style={{ display: 'block' }}>{city.current.condition.text}</b>
					<p>
						Temp. (ºC): <b>{city.current.temp_c}</b>
					</p>
					<p>
						Humidity (%): <b>{city.current.humidity}</b>
					</p>
					<p>
						Rain (mm): <b>{city.current.precip_mm}</b>
					</p>
				</div>
			))}
		</div>
	)
}

export default WeatherCardContainer
