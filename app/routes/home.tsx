import FavouriteCities from 'components/FavouriteCities'
import { useLoaderData } from '@remix-run/react'
import getApiResponse from 'utils/fetch'
import { LoaderArgs, json, ActionArgs } from '@remix-run/node'
import { getUserId } from 'session'
import { redirect } from '@remix-run/node'
import Logout from 'components/Logout'
import { prisma } from '../../prisma/prismaClient'
import WeatherCardContainer from 'components/WeatherCardContainer'
import { WeatherData } from 'remix.env'
import 'global.css'

export function ErrorBoundary({ error }) {
	return (
		<div>
			<h1>my custom Error</h1>
			<p>{error.message}</p>
			<p>The stack trace is:</p>
			<pre>{error.stack}</pre>
		</div>
	)
}

export const action = async ({ request }: ActionArgs) => {
	const formData = await request.formData()
	const city = formData.get('city') as string

	// If the city already exists in the db, return error
	if (await prisma.faveCity.findFirst({ where: { name: city } }))
		return json({ status: 400 })

	// if city is non-blank, lets either delete or create it
	if (city !== '') {
		formData.get('action') === 'post'
			? await prisma.faveCity.create({ data: { name: city } })
			: await prisma.faveCity.delete({ where: { cityId: city } })
	}

	//revalidate the home page with updated data
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
			cityId: true,
		},
	})
	const weatherData: WeatherData[] = await Promise.all(
		cities.map(async (city) => await getApiResponse(city.name))
	)

	// send back the userID, cities retrieved and weatherData to main component
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
