import { useState } from 'react';
import '../index.css'

const Country = ({country, onCheck}) => {

    const[check,setCheck] = useState(false)

    const handleCheckboxChange = () => {
        setCheck(!check)
      };

    if (onCheck){
        onCheck(country);
    }

    return (  
        <div className="country-box">
            <p><b>{country.name.common}</b>  {country.flag}</p>
            <label>
                <input type="checkbox" checked={check} onChange={handleCheckboxChange} />
                Check Me Off!
            </label>
           
        </div>
    );
}
 
export default Country;