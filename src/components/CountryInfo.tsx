import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function CountryInfo(props: { hideCountryInfo: React.MouseEventHandler<HTMLDivElement> | undefined; countryImg: string | undefined; }) {
  return (
    <div className="country-info">
        <div onClick={props.hideCountryInfo} className="country-info__back">
            <KeyboardBackspaceIcon /> back
        </div>
        <div>
        <img src={props.countryImg}/>

            
        </div>
    </div>
  )
}

export default CountryInfo