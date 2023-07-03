import { useState } from 'react'
import { Form } from '@remix-run/react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

type TAddNewCityInput = {
	isDisabled: boolean
}

const AddNewCityInput = ({ isDisabled }: TAddNewCityInput) => {
	return (
		<Form
			method="post"
			style={{ width: '15rem', margin: 'auto' }}
		>
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
				disabled={isDisabled}
			>
				<b>Add City</b>
			</button>
		</Form>
	)
}

const CityItem = ({ name, cityId }: { name: string; cityId: string }) => {
	return (
		<h4 className="cityLabel">
			{name}
			<Form
				method="delete"
				style={{ display: 'inline-block' }}
			>
				<input
					type="hidden"
					name="city"
					value={cityId}
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
	)
}

const FavouriteCities = ({
	cities,
}: {
	cities: Array<{ name: string; cityId: string }>
}) => {
	return (
		<div className="faveCityContainer">
			<div className="header">
				<h2 className="title">Favourite Cities</h2>
			</div>
			<div className="content">
				<AddNewCityInput isDisabled={cities.length === 5} />
				{cities.length === 0 ? (
					<h4 style={{ textAlign: 'center' }}>There are no cities</h4>
				) : (
					cities.map((city) => (
						<CityItem
							{...city}
							key={city.cityId}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default FavouriteCities
