import React, { useState, useEffect } from 'react'
import Display from './components/Display';



export default function App() {

  // const [user, setUser] = useState({
  //   username:'', password: '', token:''}
  // )
  const [Country, setCountry] = useState([])

  const regions = [{
    name:'Asia',},
    {name:'Europe',},
    {name:'Africa',},
    {name:'Oceania'},
    {name:'Americas',}
  ]
  
  const [search, setSearch] = useState('')


  const getData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const Country = await res.json();
    setCountry(Country)
    console.log(Country);
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    document.title = 'Countries | Home'
}, []);

  const findThatCountry = async (e) =>{
    e.preventDefault()
    const res = await fetch(`https://restcountries.com/v3.1/name/${search}`)
    const data = await res.json()
    setCountry(data)
  }

  async function findThatRegion(region){
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    setCountry(data)
  }

  function regionFinder(e){
    e.preventDefault();
    findThatRegion()

  }


  return (
    <>
    <section>

      <div class='mainformy '>
        <form autoComplete='on' onSubmit={findThatCountry}>
          <input className='formy' 
            type='text' 
            name='search' 
            id='search' 
            placeholder='Search for a country'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required />
        </form>

        <form className='dropdownn' onSubmit={regionFinder}>

          <select 
            name='filter-by-region' 
            id='filter-by-region'
            value={regions.name}
            onChange={(e)=> findThatRegion(e.target.value)}>

            {regions.map((region, index)=> (
              <option key={index} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </form>

      
      </div>

      <div className='work'>
        
     {Country.map((place) => (
        <Display key={place.name.common} {...place} />

      ))}
      </div>
     </section>
  
    </>
  )
}