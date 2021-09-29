import "./CountryInfo.style.css";
import { MdKeyboardBackspace } from "react-icons/md";

// React Router
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// React Redux
import { useSelector } from "react-redux";

const CountryInfo = () => {
  // Redux State
  const changeBackgroundState = useSelector((state) => state.mode);

  // React router STATE Props
  const location = useLocation();
  const { name } = location.state;

  //Custom State
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [borderData] = useState("");
  const [findName, setFindName] = useState(name);

  const handleBorderClick = (bor) => {
    fetch(`https://restcountries.com/v2/alpha/${bor}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setFindName(data.name))
      .catch((error) => {
        console.error("Error fetching data ", error);
      });
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${findName}?fullText=true`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data ", error);
      })
      .finally(() => setLoading(false));
  }, [findName]);

  if (loading) {
    return "Loading";
  }

  return (
    <div
      className={
        changeBackgroundState
          ? "country-info-container-dark"
          : "country-info-container"
      }
    >
      <div className="back">
        <Link to="/">
          <div className={changeBackgroundState ? "arrow-dark" : "arrow"}>
            <MdKeyboardBackspace /> <span>Back</span>
          </div>
        </Link>
      </div>
      <div className="country-info-wrapper">
        <div className="country-info-img-wrapper">
          <img src={data[0].flag} alt="countryImg " />
        </div>
        <div className="country-info-panel">
          <div className="title">{data[0].name}</div>
          <div className="country-info-informations">
            <div className="left-side">
              <p>
                Native Name:{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].name}
                </span>
              </p>
              <p>
                Population:{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </span>
              </p>
              <p>
                Region{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].region}
                </span>
              </p>
              <p>
                Sub region:{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].subregion}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].capital}
                </span>
              </p>
            </div>
            <div className="right-side">
              <p>
                Top Level Domain{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:{" "}
                <span
                  className={
                    changeBackgroundState
                      ? "country-info-informations-span-light"
                      : "country-info-informations-span-dark"
                  }
                >
                  {data[0].currencies !== undefined ? data[0].currencies[0].name : "No currencies found"}
                </span>
              </p>
              <p>
                Languages:{" "}
                {data[0].languages.map((language, index) => {
                  return (
                    <span
                      className={
                        changeBackgroundState
                          ? "country-info-informations-span-light"
                          : "country-info-informations-span-dark"
                      }
                      key={index}
                    >
                      {language.name}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p className="border-countries-title">Border Countries:</p>
            <span className="flex">
              {data[0].borders !== undefined ? data[0].borders.map((border, index) => {
                return (
                  <Link
                    to={{
                      pathname: "/country-border",
                      state: {
                        name: findName,
                      },
                    }}
                    key={index}
                  >
                    <p
                      className={
                        changeBackgroundState
                          ? "border-countries-name-dark "
                          : "border-countries-name"
                      }
                      onClick={(e) => handleBorderClick(border)}
                      key={index}
                    >
                      {border}
                    </p>
                  </Link>
                );
              }) : 'No border countries'
            }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;