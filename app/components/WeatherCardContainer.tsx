import { getIconString } from 'utils/getIcon'
import 'styles/home.css'

const WeatherCardContainer = ({ weatherData }) => {
	return (
		<div className="weatherCardContainer">
			{weatherData.map((city, idx) => (
				<div
					key={idx}
					className="weatherCard"
				>
					<h4 style={{ display: 'block' }}>{city.location.name}</h4>
					<img
						src={getIconString(city.current.condition.code)}
						alt="weatherLogo"
						style={{ display: 'inline-block' }}
					/>
					<p>{city.current.condition.text}</p>
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
