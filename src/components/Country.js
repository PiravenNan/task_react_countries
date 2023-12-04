import '../index.css'

const Country = ({country}) => {

    return (  
        <div className="country-box">
            <p><b>{country.name.common}</b>  {country.flag}</p>
            <label>
                <input type="checkbox" />
                Check Me Off!
            </label>
           
        </div>
    );
}
 
export default Country;