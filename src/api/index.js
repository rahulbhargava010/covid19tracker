import Axios from "axios";

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    try {
        let newUrl = url
        if (country) {
            newUrl = `${url}/countries/${country}`
        }

        const { data: { confirmed, recovered, deaths, lastUpdate }} = await Axios.get(newUrl)
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (err) {
        throw err;
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await Axios.get(`${url}/daily`)

        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate
        }))

        return modifiedData;
    } catch (err) {
        throw err;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await Axios.get(`${url}/countries`)

        return countries.map( (country) => country.name )
    } catch (err) {
        throw err;
    }
}