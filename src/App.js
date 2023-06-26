import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';

import Countries from './Components/Countries';
import SingleCountry from './Components/SingleCountry';


function App() {
      //state for storing user's search term
    

  
  //state to keep track of the current theme in our application
  const [theme, setTheme] = useState(
  localStorage.getItem('theme') || 'theme-light'
  );

  const toggleButton = ()=>{
    if(theme === 'theme-light'){
      setTheme('theme-dark');
    }else{
      setTheme('theme-light');
    }
  }

  //use the useEffect to dynamically update the theme of the application based on the current theme state variable
  useEffect(()=>{
    localStorage.setItem('theme', theme);
  document.body.className = theme;
  },[theme])

  return (
    <div className={`App ${theme}`}>
    <Router>
    <Navbar toggleButton={toggleButton} theme={theme}/>
    <Routes>
    <Route path='/' element={<Countries />} />
    <Route path='/country/:name' element={<SingleCountry/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
