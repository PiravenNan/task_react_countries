import Country from './Country';

const CountryList = ({ data, onCheck ,title,isChecked}) => {
  
  const countriesInList = data.map((country, index) => {
        return <Country key={index} country={country} onCheck={onCheck} isChecked={isChecked} />;
    });

  return (
    <section>
      <h2>{title}</h2>
      {countriesInList}
    </section>
  );
};

export default CountryList;
