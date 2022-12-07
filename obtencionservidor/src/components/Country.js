import React from 'react'
import CountryDetails from './CountryDetails'
const Country = ({country}) => {
  return (
    <div>
      <CountryDetails countryDetails={country} />
    </div>
  )
}

export default Country