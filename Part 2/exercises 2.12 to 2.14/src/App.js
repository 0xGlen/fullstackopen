import axios from 'axios'
import { useState, useEffect} from 'react'
import CountryList from './components/CountryList.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState('')
  const [showCountry, setShowCountry] = useState(false)
  const [oneCountry, setOneCountry] = useState({})

useEffect(() => {
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
       setCountries(response.data)
    })
}, [])

const handleChange = (event) => {
  setFilterCountries(event.target.value)
  setShowCountry(false)
  setOneCountry({})
}

const countriesToShow = filterCountries.length >= 1 ? countries.filter(country => country.name.common.toLowerCase().includes(filterCountries.toLowerCase())) : countries

return (
  <div>
    <form>
    <p>find countries</p>
    <input value={filterCountries} onChange={handleChange}/>
    </form>

  {filterCountries.length >=1 ? <CountryList countriesToShow={countriesToShow} showCountry={showCountry} setShowCountry={setShowCountry} oneCountry={oneCountry} setOneCountry={setOneCountry}/> : ''}
  </div>) 
  }

export default App
