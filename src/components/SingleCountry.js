import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


export default function SingleCountry() {
    const [country, setCountry] = useState([]);
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
  
   {country.map((item)=> (
    <div key={item.population}>
        <img src={item.flags.png} alt={item.name.common}/> 
        <h3>{item.name.common}</h3>   
        <h4>Population: {item.population}</h4>    
        <h4>Region: {item.region}</h4>    
        <h4>Capital: {item.capital}</h4>
        {/* <h4>Language: {[0].languages}</h4>     */}

    </div>
    
    
   ))}
   </>
  )
}
