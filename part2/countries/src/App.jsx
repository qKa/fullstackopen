import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
  const [selectedCountryName, setSelectedCountryName] = useState(null)
  const [selectedCountryData, setSelectedCountryData] = useState(null)

  useEffect(() => {
    countryService.getAll()
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  useEffect(() => {
    if (selectedCountryName) {
      countryService.getCountryByName(selectedCountryName)
        .then(response => {
          console.log("[getCountryByName] response:", response.data)
          setSelectedCountryData(response.data)
        })
        .catch(error => {
          console.error('[getCountryByName] Error fetching country details:', error)
        })
    }

    return () => {
      console.log('[getCountryByName] Cleanup function...')
      setSelectedCountryData(null)
      setSelectedCountryName(null)
    }
  }, [selectedCountryName])

  if (countries === null) {
    return null
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountryData(null)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toUpperCase().includes(filter.toUpperCase())
  )

  const onShowDetails = (countryName) => {
    setSelectedCountryName(countryName)
    console.log("[onShowDetails] function received countryName:", countryName)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {selectedCountryData ? (
        <CountryDetails country={selectedCountryData} />
      ) : (
        <Countries filteredCountries={filteredCountries} onShowDetails={onShowDetails} />
      )}
    </div>
  )
}

export default App
