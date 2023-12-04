import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {
    const [countries,setCountries] = useState([]);

    const getAllCountries = async()=>{
        const response = await fetch("https://restcountries.com/v3.1/all"); 
        const data = await response.json();
        setCountries(data);
        
    }

    useEffect(() => {
        getAllCountries();
    },[])

    const handleCheckboxChange = (country) => {
        console.log(country.name.common);
        
      };

    return ( 
        <>
        <h2>Hello World!</h2>
        {countries.length>0 ? <CountryList data={countries} onCheck={handleCheckboxChange}/>: <p>Loading...</p>}
        </>
     );
}
 
export default CountryContainer;