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

    console.log(countries.length);

    return ( 
        <>
        <h2>Hello World!</h2>
        {countries.length>0 ? <CountryList data={countries} />: <p>Loading...</p>}
        </>
     );
}
 
export default CountryContainer;