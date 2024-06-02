import Languages from './CountryDetailsLanguages'

const CountryDetails = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <Languages country={country} />
            <img className={`img flag`} src={country.flags.png} alt={country.flags.alt}></img>
        </div>
    )
}

export default CountryDetails
