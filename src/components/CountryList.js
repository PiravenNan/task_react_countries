import Country from "./Country";

const CountryList = ({data, onCheck}) => {
    const countriesInList = data.map(country => {
        return <Country country={country} onCheck={onCheck}/>;
    })

    return ( 
        <section>
            <h2>Unvisited Countries</h2>
            {countriesInList}
        </section>
     );
}
 
export default CountryList;