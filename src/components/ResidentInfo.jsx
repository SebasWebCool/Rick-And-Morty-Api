import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({ url }) => {

  const resident = useFetch(url);
  console.log(resident);
  return (
    <article className='card'>
      <header className='card_header'>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='card_status'>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className='card_info' >
        <h3 className='card_name'>{resident?.name}</h3>
        <ul className='card_list'>
          <li>
            <span>Specie: </span>{resident?.species}
          </li>
          <li>
            <span>Origin: </span>{resident?.origin.name}
          </li>
          <li>
            <span>Episodes: </span>{resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  )
}

export default CardResidents