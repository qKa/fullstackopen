const CountryDetailsLanguages = ({ country }) => {
    return (
        <div>
            <h3>Languages:</h3>
            <ul>
                {Object.entries(country.languages).map(([code, name]) => (
                    <li key={code}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CountryDetailsLanguages
