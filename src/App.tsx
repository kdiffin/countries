import { useState, useEffect } from 'react'
import React from 'react'
import { nanoid } from "nanoid"
import { countryDataInterface } from './interfaces/countryDataInterface'

import Navbar from './components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country'


function App() {
 

  const [countryData, setCountryData] = useState([] as countryDataInterface[])
  const [countryDataMutable, setCountryDataMutable] = useState([] as countryDataInterface[])
  const [toggleDropdown, setToggleDropdown ] = useState(false)
  const [regionSelected, setRegionSelected] = useState(false)


  useEffect(function() {
    console.log(countryData);
    
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountryData(data))
        
  }, [])
      
  //this sorted everything but idk why really i thought i needed to setcountrydata to it 
  countryData.sort(function(a,b ){
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) { 
      return 1;
    }
    return 0;  
      
  });


const countrysList = countryData.map((country, index) => {
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

const countryListFiltered = countryDataMutable.map((country) => {
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


function selectAsia(){
  setCountryDataMutable(countryData.filter((country) => country.region == "Asia" ))
  setRegionSelected(true) 
}
function selectEurope(){
  setCountryDataMutable(countryData.filter((country) => country.region == "Europe" ))
  setRegionSelected(true)
}
function selectAfrica(){
  setCountryDataMutable(countryData.filter((country) => country.region == "Africa" ))
  setRegionSelected(true)
}
function selectOceania(){
  setCountryDataMutable(countryData.filter((country) => country.region == "Oceania" ))
  setRegionSelected(true)
}
function selectAmericas(){
  setCountryDataMutable(countryData.filter((country) => country.region == "Americas" ))
  setRegionSelected(true)  
}
function selectAntarctic(){
  setCountryDataMutable(countryData.filter((country) => country.region == "Antarctic" ))
  setRegionSelected(true)
}




 
  return (
    <div className="App">
      <Navbar />
      <div className="app__body">
        
        <div className="app__form">
          <div className="app__form-input-container">
            <span ><SearchIcon className="app__form-input-search"/></span><input type="text" className="app__form-input"placeholder="Search for a country..."/>
            <button type="submit"></button>
          </div>

          <div className="app__form-select">
            <h4  style={{fontWeight: 400}}onClick={() => setToggleDropdown(!toggleDropdown)}>Select by region:</h4>
            {toggleDropdown && <ul>
              <li onClick={() => setRegionSelected(false)} >Any region</li>
              <li onClick={selectAsia} >Asia</li>
              <li onClick={selectEurope}>Europe</li>
              <li onClick={selectAfrica}>Africa</li>
              <li onClick={selectOceania}>Oceania</li>
              <li onClick={selectAmericas}>Americas</li>
              <li onClick={selectAntarctic}>Antarctic</li>
            </ul>}
          </div>

        </div>
        <div className="app__countrysList">

           {!regionSelected ? countrysList : countryListFiltered}
          

        </div>
      </div>
    </div>
  )
}

export default App
