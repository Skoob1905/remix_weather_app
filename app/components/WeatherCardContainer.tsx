import { getIconString } from 'utils/getIcon'
import { WeatherData } from 'remix.env'

const WeatherCardContainer = ({
	weatherData,
}: {
	weatherData: WeatherData[]
}) => {
	return (
		<div className="weatherCardContainer">
			{weatherData.map((city: WeatherData, idx: number) => {
				const {
					location: { name },
					current: {
						condition: { text, code },
						temp_c,
						humidity,
						precip_mm,
					},
				} = city

				return (
					<div
						key={idx}
						className="weatherCard"
					>
						<h4>{name}</h4>
						<img
							src={getIconString(code)}
							alt="weatherLogo"
							style={{ display: 'inline-block' }}
						/>
						<b style={{ display: 'block' }}>{text}</b>
						<p>
							Temp. (ºC): <b>{temp_c}</b>
						</p>
						<p>
							Humidity (%): <b>{humidity}</b>
						</p>
						<p>
							Rain (mm): <b>{precip_mm}</b>
						</p>
					</div>
				)
			})}
		</div>
	)
}

export default WeatherCardContainer
