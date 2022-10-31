import React from 'react'
import "./css-files/Country.css"

function Country(props: { showCountryInfo: (arg0: React.MouseEvent<HTMLDivElement, MouseEvent>, arg1: any) => void; name: any; countryImg: string | undefined; countryName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryPopulation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryCapital: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryRegion: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  return (
    <div className="country-card" onClick={(event) => props.showCountryInfo(event, props.name)}>
     <img src={props.countryImg}/>
      <div className='country-card__stats'>
        <h2>{props.countryName}</h2>
        <p><span style={{fontWeight: 600}}>Population: </span>{props.countryPopulation}</p>
        <p><span style={{fontWeight: 600}}>Capital: </span> {props.countryCapital}</p>
        <p><span style={{fontWeight: 600}}>Region: </span> {props.countryRegion}</p>

      </div>
    </div>
  )
}

export default Country 