import weatherCodes from 'codes.json'

export const getIconString = (codeToFind: number): string => {
	const iconVal = weatherCodes.find(({ code }) => code === codeToFind)?.icon
	const iconPath = `weather/64x64/day/${iconVal}.png`
	return iconPath
}
