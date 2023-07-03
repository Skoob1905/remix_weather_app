import FavouriteCities from 'components/FavouriteCities'
import { useLoaderData } from '@remix-run/react'
import getApiResponse from 'utils/fetch'
import { LoaderArgs, json, ActionArgs } from '@remix-run/node'
import { getUserId } from 'session'
import { redirect } from '@remix-run/node'
import Logout from 'components/Logout'
import { getIconString } from 'utils/getIcon'
import { prisma } from 'db.server'
import WeatherCardContainer from 'components/WeatherCardContainer'
import 'styles/home.css'

type WeatherResponse = {
	current: {
		condition: { text: string; code: number }
		temp_c: number
		humidity: number
		precip_mm: number
	}
	location: { name: string }
}

export const action = async ({ request }: ActionArgs) => {
	const formData = await request.formData()
	const city = formData.get('city')

	const data = { name: city }
	if (city === '') return redirect('/home')
	formData.get('action') === 'post'
		? await prisma.faveCity.create({ data })
		: await prisma.faveCity.deleteMany({ where: data })
	return redirect('/home')
}

export const loader = async ({ request }: LoaderArgs) => {
	// We want to see if user has a cookie session active after logging in
	const userId = await getUserId(request)
	if (!userId) return redirect('/login')

	// Now they are logged in, we can load the page data
	const cities = await prisma.faveCity.findMany({
		select: {
			name: true,
		},
	})
	const weatherData: WeatherResponse[] = await Promise.all(
		cities.map(
			async (city) => await getApiResponse<string, WeatherResponse>(city.name)
		)
	)

	return json({ userId, cities, weatherData })
}

const Home = () => {
	const { userId, cities, weatherData } = useLoaderData<typeof loader>()
	return (
		<>
			<div className="headerBox">
				<h1 className="title">Welcome {userId}!</h1>
				<Logout />
			</div>

			<FavouriteCities cities={cities} />
			<WeatherCardContainer weatherData={weatherData} />
		</>
	)
}

export default Home
