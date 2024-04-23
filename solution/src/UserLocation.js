import { getLocations } from "./mock-api/apis";
import { useEffect, useState } from "react"

export default function UserLocation() {
  const [countries, setCountries] = useState([])
  const fetchLocations = async () => {
    try {
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

  return (
    <select id="user-location" name="user-location">
      {countries.map(country => {
        return <option value={country} id={country}>
          {country}
        </option>
      })}
    </select>
  )
}