import React from 'react'
const CountryDetails = ({countryDetails}) => {
  return (
    <div>
        <h1>{countryDetails.name.common}</h1>
        <p>capital {countryDetails.capital} <br/> area {countryDetails.area}</p>
        <h2>languages:</h2>
        {Object.keys(countryDetails.languages).map((language, i) => 
        <li key={i}>{countryDetails.languages[language]}</li>)}
        <br/>
        <img src={countryDetails.flags.png}></img> 
    </div>
  )
}

export default CountryDetails