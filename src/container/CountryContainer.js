import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import '../index.css';

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const getAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const handleCheckboxChange = (country) => {
    if (countries.includes(country)){
        const updatedCountries = countries.filter((loopCountry) => {
            return country !== loopCountry;
        });
        setCountries(updatedCountries);

        const updatedVisitedCountries = [country, ...visitedCountries];
        setVisitedCountries(updatedVisitedCountries);
       
    }else {
        const updatedVisitedCountries = visitedCountries.filter((loopCountry) => {
            return country !== loopCountry;
        });
        setVisitedCountries(updatedVisitedCountries);
        
        const updatedCountries = [country, ...countries];
        setCountries(updatedCountries);

    }
  };

  return (
    <>
      <h1>Country Check List</h1>
      <div className="country-list-container">
        {countries.length > 0 ? <CountryList data={countries} onCheck={handleCheckboxChange} title={"Unvisited Countries"} isChecked={false}/> : <p>Loading...</p>}
        {countries.length > 0 ? <CountryList data={visitedCountries} onCheck={handleCheckboxChange} title={"Visited Countries"} isChecked={true}/> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default CountryContainer;
