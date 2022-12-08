import React, { useState, useEffect } from 'react'
import Display from './components/Display';



export default function App () {
  // const [user, setUser] = useSate({});
  
    const [Country, setCountry] = useState([])
    
    const getData = async () => {
    const res =  await fetch('https://restcountries.com/v3.1/all')
    const Country = await res.json();
    setCountry(Country)
    console.log(Country);
  }
  useEffect(() => {
    getData()
  }, [])


return (
    <>
    {Country.map((place)=>(
      <Display  key={place.name.common} {...place}/>
      
    ))}
    </>
  )
}