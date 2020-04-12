import React, { useState, useEffect } from 'react'
import { fetchCountries } from "../../api"

const CountryPicker = ( { hanldeCountryChange, countryData } ) => {
    const [ fetchedCountries, setFetchedCountries ] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries( await fetchCountries() ) 
        }

        fetchApi();
    }, [setFetchedCountries]);

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <select className="form-control" onChange={(e) => hanldeCountryChange(e.target.value) } >
                        <option>-- Select Country --</option>
                        {fetchedCountries.map( (country, i) => <option key={i} value={country}>{country}</option> )}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CountryPicker
