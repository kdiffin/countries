import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function CountryInfo(props: { hideCountryInfo: React.MouseEventHandler<HTMLDivElement> | undefined; countryImg: string | undefined; }) {
  return (
    <div>
        <div onClick={props.hideCountryInfo}>
        
            <KeyboardBackspaceIcon />

        </div>
        <img src={props.countryImg}/>
    </div>
  )
}

export default CountryInfo