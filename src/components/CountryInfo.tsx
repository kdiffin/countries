import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function CountryInfo(props: { hideCountryInfo: React.MouseEventHandler<HTMLDivElement> | undefined; countryImg: string | undefined; countryName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryOfficialName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryNativeName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryIndependant: any; countryPopulation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryRegion: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countrySubRegion: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; countryCapital: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryDomain: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryCurrency: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; countryLanguages: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <div className="country-info">
        <div onClick={props.hideCountryInfo} className="country-info__back">
            <KeyboardBackspaceIcon /> back
        </div>
        <div className='country-info__body'>
          <img src={props.countryImg}/>
          <h2>{props.countryName}</h2>
          <div className="country-info__stats">
            <p><span>Official Name: </span>{props.countryOfficialName}</p>
            <p><span>Native Name: </span>{ props.countryNativeName}</p>
            <p><span>Independant: </span>{props.countryIndependant ? "true" : "false"}</p>

            <p><span>Population: </span>{props.countryPopulation}</p>
            <p><span>Region: </span>{props.countryRegion}</p>
            <p><span>Sub Region: </span>{props.countrySubRegion === undefined ? "No sub region..." : props.countrySubRegion}</p>
            <p><span>Capital: </span>{props.countryCapital}</p>
            <p><span>Domain name: </span>{props.countryDomain}</p>
            <p><span>Currencies: </span>{props.countryCurrency}</p>
            <p><span>Main Language: </span>{props.countryLanguages }</p>
          </div>
        </div>
    </div>  
  )
}

export default CountryInfo