import React from 'react'
import { Link } from 'react-router-dom'

export default function Display( {flags, name, population, region, capital}) {
  return (
   <Link to={`/${name.common}`} style={{}}>
    <article className='card styler'>
       <div>
            <img src={flags.png} alt={name.common} className='md:h-64 w-full'/> 
            <h3>{name.common}</h3>  
            <h4>Population: {population.toLocaleString()}</h4>    
            <h4>Region: {region}</h4>    
            <h4>Capital: {capital}</h4>
            {/* <h4>Language: {[0].languages}</h4>     */}
          </div> 
           
    </article>
   </Link>
  )
}
