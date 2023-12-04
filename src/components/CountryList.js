import Country from './Country';

const CountryList = ({ data, onCheck }) => {
  
  const countriesInList = data.map((country, index) => {
    //console.log(onCheck);
        return <Country country={country} onCheck={onCheck} isChecked={false} />;
    });
    
  return (
    <section>
      <h2>Unvisited Countries</h2>
      {countriesInList}
    </section>
  );
};

export default CountryList;
