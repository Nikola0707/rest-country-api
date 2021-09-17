import "./CountryInfo.style.css";
import { MdKeyboardBackspace } from "react-icons/md";

// React Router
import { Link } from "react-router-dom";

const CountryInfo = () => {
  return (
    <div className="country-info-container">
      <div className="back">
        <Link to="/">
          <div className="arrow">
            <MdKeyboardBackspace /> <span>Back</span>
          </div>
        </Link>
      </div>
      <div className="country-info-wrapper">
        <div className="country-info-img-wrapper">
          <img src="https://i.imgur.com/vnvHjxc.png" alt="countryImg " />
        </div>
        <div className="country-info-panel">
          <div className="title">Belgium</div>
          <div className="country-info-informations">
            <div className="left-side">
              <p>
                Native Name: <span>Belgie</span>
              </p>
              <p>
                Population: <span>11.319.511</span>
              </p>
              <p>
                Region <span>Europe</span>
              </p>
              <p>
                Sub region: <span>Western Europe</span>
              </p>
              <p>
                Capital: <span>Brussels</span>
              </p>
            </div>
            <div className="right-side">
              <p>
                Top Level Domain <span>.be</span>
              </p>
              <p>
                Currencies: <span>Euro</span>
              </p>
              <p>
                Languages: <span>Dutch, French, German</span>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p className="border-countries-title">Border Countries:</p>
            <p className="border-countries-name">France</p>
            <p className="border-countries-name">Germany</p>
            <p className="border-countries-name">Netherlands</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
