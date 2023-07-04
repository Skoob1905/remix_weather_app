# Remix Weather App

Find the weather in any city using this Full stack app! Add your favourite cities and see what the weather is like. For each city, you will be able to view:

- Description (text and a logo) of the weather
- Rainfall in mm
- Humidity in %
- Temperate in ºC

## App Setup

Feel free to clone this repo using

```
git clone https://github.com/Skoob1905/remix_weather_app
cd remix_weather_app
```

### npm

If you have npm installed run these

```
npm i
npm run dev
```

### yarn

if you have yarn installed then run

```
yarn
yarn dev
```

---

## Authentication/Route Protection

This app uses session cookies to log the user in and out. When the log in button or the log out button is pressed. Meaning that you can revisit the browser and still be logged in.

If the user is not logged in, they cannot navigate past the login page until they have signed in.

---

## Database

As a full stack application, there is a local sqlite is being queries using the Prisma ORM, this application uses one table call **FaveCity**.

| Table    | Operation | Description                                              |
| -------- | --------- | -------------------------------------------------------- |
| FaveCity | Create    | New cities will be added to this table                   |
| FaveCity | Delete    | User can delete cities from the table                    |
| FaveCity | Read      | Cities inside the db will be read and sent to the screen |
