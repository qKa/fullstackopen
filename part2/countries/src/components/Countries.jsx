import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ filteredCountries, onShowDetails }) => {
    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }

    if (filteredCountries.length === 1) {
        return <CountryDetails country={filteredCountries[0]} />
    }

    return (
        <div>
            {filteredCountries.map(country => (
                <Country key={country.cca3} country={country} onShowDetails={onShowDetails} />
            ))}
        </div>
    )
}

export default Countries
