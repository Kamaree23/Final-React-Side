import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


export default function SingleCountry() {
    const [Country, setCountry] = useState([]);
    const { name } = useParams();

  
    useEffect(() => {
        const getapi = async () => {
           try{
             const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)   
             const data = await res.json()
             setCountry(data)
           } catch (error) {
            console.error(error)
           }
        }
        getapi()
    },[name])

    useEffect(() => {
        document.title = `Country | ${name}`
    }, [name]);
  return (
   <>
  
   {Country.map((item)=> (
    <div key={item.population}>
      <div className='card hope'>
        <img src={item.flags.png} alt={item.name.common}/> 
        <h3>{item.name.common}</h3>   
        <h4>Population: {item.population}</h4>    
        <h4>Region: {item.region}</h4>    
        <h4>Capital: {item.capital}</h4>
        <h4>timezone: {item.timezones}</h4>
        {/* <span> {Object.values(data[0].languages).toString().split(",").join(", ")}</span> */}
        </div>
    </div>
    
    
   ))}
   </>
  )
}
