const Country = ({ country, onShowDetails }) => {
    // console.log("[Country.jsx] country prop:", country)
    return (
        <div>
            {country.name.common} <button onClick={() => onShowDetails(country.name.common)}>Show</button>
        </div>
    )
}

export default Country
