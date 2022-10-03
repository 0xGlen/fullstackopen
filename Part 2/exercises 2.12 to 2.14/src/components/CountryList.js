import Country from './Country'

const CountryList = ({countriesToShow, showCountry, setShowCountry, oneCountry, setOneCountry}) => {
    
    const handleClick = (country) => {
        setShowCountry(true)
        setOneCountry(country)
    }

    const countriesToDisplay = () => {
        if (countriesToShow.length > 10) {
            return 'Too many matches, specify another filter'
          } 
          else if (countriesToShow.length === 1) {
            return <Country countryToDisplay={countriesToShow[0]} />
          }
          else {
            return (
              <div>
                {countriesToShow.map(country => 
                  <div key={country.cca2}>
                    <p>{country.name.common}</p>
                    <button onClick={() => handleClick(country)}> show </button>
                  </div>)}
              </div>
            )        
    } }

    const countriesRendered = showCountry ? <Country countryToDisplay={oneCountry}/> : countriesToDisplay({countriesToShow})

    return (
        <div>
        {countriesRendered}
        </div>
    )
}
export default CountryList