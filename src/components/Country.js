import '../index.css';

const Country = ({ country, onCheck, isChecked }) => {
  return (
    <div className="country-box">
      <p>
        <b>{country.name.common}</b> {country.flag}
      </p>
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => onCheck(country)} />
        Check Me Off!
      </label>
    </div>
  );
};

export default Country;
