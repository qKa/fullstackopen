import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService.getAll()
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  if (countries === null) {
    return null
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toUpperCase().includes(filter.toUpperCase())
  )

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  )
}

export default App
