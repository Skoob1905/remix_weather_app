import { Form, useActionData } from '@remix-run/react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from './Button'
import { DBResponse } from 'remix.env'

const AddNewCityInput = ({ isDisabled }: { isDisabled: boolean }) => {
	const actionData = useActionData()
	actionData && document.getElementById('city')?.value === ''
	return (
		<Form
			method="post"
			style={{ width: '15rem', margin: 'auto' }}
		>
			{actionData?.status ? <p className="error">City already added</p> : null}
			<input
				placeholder="City"
				id="city"
				name="city"
				className="input"
			/>
			<Button
				label="Add City"
				type="submit"
				className="button"
				name="action"
				value="post"
				disabled={isDisabled}
			/>
		</Form>
	)
}

const CityItem = ({ name, cityId }: DBResponse) => {
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

const FavouriteCities = ({ cities }: { cities: DBResponse[] }) => {
	return (
		<div className="faveCityContainer">
			<h2 className="title">Favourite Cities</h2>
			<div className="content">
				<AddNewCityInput isDisabled={cities.length === 5} />
				{cities.length === 0 ? (
					<h4 style={{ textAlign: 'center' }}>There are no cities</h4>
				) : (
					cities.map((city) => (
						<CityItem
							key={city.cityId}
							{...city}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default FavouriteCities
