import { useState } from 'react'
import { Form } from '@remix-run/react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const AddNewCityInput = ({ setIsAddingNewCity }) => {
	const onSubmit = () => {
		console.log('hello')
	}

	return (
		<Form method="post">
			<input
				placeholder="City"
				id="city"
				name="city"
				className="input"
			/>
			<button
				type="submit"
				className="button"
				name="action"
				value="post"
				onClick={onSubmit}
			>
				<b>Submit</b>
			</button>
		</Form>
	)
}

const CityItem = ({ name }: { name: string }) => (
	<>
		<h4 className="cityLabel">
			{name}
			<Form
				method="delete"
				style={{ display: 'inline-block' }}
			>
				<input
					type="hidden"
					name="city"
					value={name}
				/>
				<IconButton
					sx={{ marginLeft: '.5rem' }}
					type="submit"
					name="action"
					value="delete"
				>
					<CloseIcon fontSize="small" />
				</IconButton>
			</Form>
		</h4>
	</>
)

const FavouriteCities = ({ cities }: { cities: Array<{ name: string }> }) => {
	const [isAddingNewCity, setIsAddingNewCity] = useState(false)

	return (
		<div className="faveCityContainer">
			<div className="header">
				<h2 className="title">Favourite Cities</h2>
				<button
					onClick={() => setIsAddingNewCity(!isAddingNewCity)}
					className="button"
					disabled={cities.length === 5}
				>
					{isAddingNewCity ? <b>Return</b> : <b>Add City</b>}
				</button>
			</div>
			<div className="content">
				{cities.length === 0 ? (
					<h4 style={{ textAlign: 'center' }}>There are no cities</h4>
				) : (
					cities.map((city: { name: string }, idx: number) => (
						<CityItem
							name={city.name}
							key={idx}
						/>
					))
				)}
				{isAddingNewCity ? (
					<AddNewCityInput setIsAddingNewCity={setIsAddingNewCity} />
				) : null}
			</div>
		</div>
	)
}

export default FavouriteCities
