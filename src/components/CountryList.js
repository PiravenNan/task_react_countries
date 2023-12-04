import Country from "./Country";

const CountryList = ({data}) => {
    const countriesInList = data.map(country => {
        return <Country country={country}/>;
    })

    return ( 
        <section>
            <h2>Unvisited Countries</h2>
            {countriesInList}
        </section>
     );
}
 
export default CountryList;