import { getLocations } from "./mock-api/apis";
import { useEffect, useState } from "react"

export default function UserLocation({userLocationOnChange, location}) {
  const [countries, setCountries] = useState([])
  const fetchLocations = async () => {
    try {
      // Two choices are made to improve the user experience
      // 1. added "Select a country" option to the drop down. Without this, user is given a 
      // country by default on page load. This default country may not be the user country.
      // 2. Sorted the country list. Sorting the list improves the user experience, by giving
      // the user an opportunity to guesss where his/her country will be in the list

      const locations = await getLocations()
      locations.sort()
      locations.unshift("Select a country")
      setCountries(locations)
    } catch (e) {
      console.log("Error fetching countries")
    }
  }
  useEffect(() => {
    fetchLocations()
  }, [])
  function handleChange(e) {
    userLocationOnChange({
      value: e.target.value,
      isValid: e.target.value != 'Select a country'
    })
  }

  return (
    <>
    {/* All form controls have proper label tags. This will improve the app's accessibility score */}
      <label htmlFor="user-location" className='formlabel'>Location</label>
      <select id="user-location" name="user-location" onChange={handleChange} value={location}>
        {countries.map(country => {
          return <option value={country} key={country} id={country}>
            {country}
          </option>
        })}
      </select>
    </>

  )
}