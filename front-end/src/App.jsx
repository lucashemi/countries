import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/home';
import Country from './pages/Country';

const baseUrl = "http://localhost:3001";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = async () => {
    try {
      const url = `${baseUrl}/countries`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data.countryList);
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  const onCountryClick = async (countryData) => {
    try {
      const [countryCode, countryName] = countryData.split('-');

      const url = `${baseUrl}/countries/${countryCode}`;
      const response = await fetch(url);
      const data = await response.json();
      
      setSelectedCountry({ name: countryName, data });
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  const handleGoHome = () => {
    setSelectedCountry(null);
  }

  return (
    <>
      <main>
        {selectedCountry ? 
        <Country country={selectedCountry} onCountryClick={onCountryClick} handleGoHome={handleGoHome} /> 
        : 
        <Home countries={countries} onCountryClick={onCountryClick} />}
      </main>
    </>
  )
}

export default App
