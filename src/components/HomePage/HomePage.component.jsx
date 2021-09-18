import { useEffect, useState } from "react";
import Country from "../CountryCard/Country.component";
import Filter from "../Filter/Filter.component";
import Header from "../Header/Header.components";
import Search from "../Search/Search.component";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(data);
  return (
    <>
      <Header />
      <div className="main-content-container">
        <div className="search-filter-container">
          <Search />
          <Filter />
        </div>
        <div className="countries-container">
          {loading
            ? "Loading"
            : data.map((country) => {
                const name = country.name;
                const flag = country.flag;
                const population = country.population;
                const region = country.region;
                const capital = country.capital 
                
                return <Country name={name} flag={flag} population={population} region={region} capital={capital}/> 
              })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
