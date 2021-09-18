import { Link } from "react-router-dom";
import "./Country.style.css";

const Country = ({name, flag, population, region, capital}) => {
  return (
    <Link to="/country">
      <div className="contry-container">
        <div className="country-img-wrapper">
          <img src={flag} alt={name} />
        </div>
        <div className="country-info">
          <p className="country-name">{name}</p>
          <div className="population-region-capital-wrapper">
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
