import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/Location'
import CardResidents from './components/ResidentInfo'
import axios from 'axios'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState(``)

  useEffect(() => {

    let randomLocation
    if (searchInput === ``) {
      randomLocation = Math.ceil(Math.random() * 126)
    } else {
      randomLocation = searchInput
    }

    const url = (`https://rickandmortyapi.com/api/location/${randomLocation}`)

    axios.get(url)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }, [searchInput])

  const handdleSubmit = (e) => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }
  // console.log(searchInput)
  // console.log(location);

  return (
    <div className="App">
      <div className='header'>
        <form onSubmit={handdleSubmit} >
          <input type="text" id='search' placeholder='Type a location id' />
          <button>Search</button>
        </form>
      </div>
        <LocationInfo location={location} />
      <div className='cards_cont'>
        {location?.residents.map(url => <CardResidents key={url} url={url} />)}
      </div>
    </div>
  )
}

export default App
