import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from './icons';
import '../Styles/SingleCountry.css'

const SingleCountry = () => {
    const [country, setCountry] = useState([]);
    let {name} = useParams();

    
    useEffect(()=>{
        let isCancelled = false;
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => {
            if(!isCancelled){
                setCountry(data);
            }
        })
        //cleanup function
        return ()=>{
            isCancelled = true;
        }
    },[])
    


    return (
    <div>

    {country.map((singleCountry, key) => {
let {
name,
population,
region,
subregion,
currencies,
languages,
flags,
capital,
tld,
} = singleCountry;





return (
<div key={key} className='container-five'>
    <div className='btn-back'>
        <Link to='/' className='arrow'>
        <ArrowLeft/>
        Back</Link>
    </div>
    
    <div className="container-four">
<div className="image">
<img src={flags.png} alt={flags.alt} className="img-one" />
</div>

<div className="country-details">

<h1 className='name-country'>{name.common}</h1>
<div className="about">
<div className="about-one">
<p><b  className='b'>Native Name: </b><span>{Object.values(name.nativeName)[0].common}</span></p>
<p className='paragraph'><b className='b'>Population:</b> <span>{population}</span></p>
<p className='paragraph'><b className='b'>Region:</b> <span>{region}</span></p>
<p className='paragraph'><b className='b'>Region:</b> <span>{region}</span></p>
<p className='paragraph'><b className='b'>Sub Region:</b> <span>{subregion}</span></p>
<p className='paragraph'><b className='b'>Capital:</b> <span>{capital}</span></p>
</div>


<div className="about-two">
<p className='paragraph'><b className='b'>Top Level Domain:</b> <span>{tld[0]}</span></p>
<p className='paragraph'><b className='b'>Currencies:</b> <span>{
    Object.values(currencies).map(v => v.name).join()
    }
</span></p>

<p className='paragraph'><b className='b'>Languages:</b> <span>{Object.values(languages).map(v=> v).join(', ')}</span></p>
</div>

</div>

<div className="total-borders-info">
<p className='border-text'>Border Countries:</p>
<div className="borders">
    <div className='main-border'>
    {
    country.map((singleCountry) => {
    
    if(singleCountry.hasOwnProperty('borders')){
            return <div className='main-border'>{singleCountry.borders.map(x=><Link>{x}</Link>)}</div>
            
        }
    })
    
    }
    
    </div>
</div>
</div>
</div>
</div>
</div>
        )
    })}
    </div>
    )
}

export default SingleCountry
