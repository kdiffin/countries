import { useState, useEffect } from 'react'
import React from 'react'
import { nanoid } from "nanoid"
import { countryDataInterface } from './interfaces/countryDataInterface'

import Navbar from './components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country'


function App() {
 

  const [countryData, setCountryData] = useState([] as countryDataInterface[])

  useEffect(function() {
    console.log(countryData);
    
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountryData(data))
        
  }, [])
      
  //this sorted everything but idk why really i thought i needed to setcountrydata to it 
  countryData.sort(function(a: any,b : any){
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;  
     
  });


const countrysList = countryData.map((country : any, index) => {
  return (
    <Country 
      countryName={country.name.common}
      countryImg={country.flags.png} 
      countryRegion={country.region}
      countryCapital={country.capital}
      countryPopulation={country.population}
      key={nanoid ()}
    /> 
)
 
}) 

  return (
    <div className="App">
      <Navbar />
      <div className="app__body">
        <form className="app__form">
          <div className="app__form-input-container">
            <span ><SearchIcon className="app__form-input-search"/></span><input type="text" className="app__form-input"placeholder="Search for a country..."/>
            <button type="submit"></button>
          </div>

        </form>
        <div className="app__countrysList">

          {countrysList}
        </div>
      </div>
    </div>
  )
}

export default App
