import { Link } from "react-router-dom";
import "./Country.style.css";

// React Redux
import { useSelector } from "react-redux";

const Country = ({ name, flag, population, region, capital }) => {
  // redux State
  const changeBackgroundState = useSelector((state) => state.mode);

  return (
    <Link
      to={{
        pathname: "/country",
        state: {
          name: name,
        },
      }}
    >
      <div
        className={
          changeBackgroundState ? "contry-container-dark" : "contry-container"
        }
      >
        <div className="country-img-wrapper">
          <img src={flag} alt={name} />
        </div>
        <div className="country-info">
          <p className="country-name">{name}</p>
          <div className="population-region-capital-wrapper">
            <p>
              Population: <span className={changeBackgroundState ? "span-dark" : "span-light"}>{population}</span>
            </p>
            <p>
              Region: <span className={changeBackgroundState ? "span-dark" : "span-light"}>{region}</span>
            </p>
            <p>
              Capital: <span className={changeBackgroundState ? "span-dark" : "span-light"}>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
