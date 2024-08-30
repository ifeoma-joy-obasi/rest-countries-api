import React, {useEffect, useState} from 'react'
import Country from './Country';
import '../Styles/countries.css'
import Form from './Form';
import {Link} from 'react-router-dom'

const Countries = () => {
    //state for storing data
    const [countriesData, setCountriesData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    //fetching data
    useEffect(()=>{
        let isCancelled = false;
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then((data) => {
        if(!isCancelled){
            setCountriesData(data)
        }
        });

        //clean up function
        return ()=>{
            isCancelled= true;
        }
    },[])

    return (
        <div>

        <Form setSearchTerm={setSearchTerm}/>
    <div className='grid-container'>
    {countriesData.filter((country)=>{
        if (searchTerm === '') {
            return country;
        }else if(country.name.common.toLowerCase().includes(searchTerm.toLowerCase())){
            return country;
        }
    }).map((country, key)=>{
        let {name} = country

        return <div key={key} className='complete'>

        <Link to={`/country/${name.common}`}>
        <Country {...country}/>
        </Link>
        </div>

    })}
    </div>
    </div>
    )
}

export default Countries
