import React from 'react'
import useFetch from '../hooks/useFetch'

const LocationInfo = ({location}) => {

  return (
    <article className='location_info'>
        <h2 className='location_name'>{location?.name}</h2>
        <ul className='location_list'>
            <li><samp>Type:</samp> {location?.type}</li>
            <li><samp>Dimension:</samp> {location?.dimension}</li>
            <li><samp>Population:</samp> {location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo