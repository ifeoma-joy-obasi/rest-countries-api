import React from 'react'
import '../Styles/Country.css'


const Country = (props) => {

    return (
    
    <div className='country-container'>
        
        <div className="img-country">
            <img src={props.flags.png} alt={props.flags.alt} className='imgcount'/>
        </div>
        
        <div className="country-detail">
            <h2 className='country-name'>{props.name.common}</h2>
            <p className='population'><b className='bold'>Population</b>: {props.population}</p>
            <p className='region'><b className='bold'>Region</b>: {props.region}</p>
            <p className='capital'><b className='bold'>Capital</b>: {props.capital}</p>
            
        </div>
    </div>
    )
}

export default Country
