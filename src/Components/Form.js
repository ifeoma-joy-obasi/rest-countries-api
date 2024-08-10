import React, {useState} from 'react'
import { SearchIcon } from './icons'
import '../Styles/Form.css'


const Form = ({ setSearchTerm}) => {

    return (
    <div>
        {/* <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}

    <div className="container-two">

                <div className="search">
                <div>
                <SearchIcon/>
                </div>
            <input type="text"
            className='search-input'
            placeholder='Search for a country...'
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            </div>

            <select className='select'>
            <option value="" default hidden>Filter by Region</option>
            <option value="Africa" className='option'>Africa</option>
            <option value="America" className='option'>America</option>
            <option value="Asia" className='option'>Asia</option>
            <option value="Europe" className='option'>Europe</option>
            <option value="Oceania" className='option'>Oceania</option>
            </select>

    </div>
    </div>
    )
}

export default Form
