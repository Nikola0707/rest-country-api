import { useEffect, useState } from "react";
import Country from "../CountryCard/Country.component";
import Filter from "../Filter/Filter.component";
import Search from "../Search/Search.component";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((country) => {
      return country.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleFilter = (value) => {
    const filter = data.filter((data) => {
      return data.region.toLowerCase().includes(value.toLowerCase());
    });
    return setFilteredData(filter);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
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

  return (
    <>
      <div className="main-content-container">
        <div className="search-filter-container">
          <Search handleSearch={handleSearch} />
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="countries-container">
          {filteredData.length > 0
            ? filteredData.map((country, i) => {
                return (
                  <Country
                    name={country.name}
                    flag={country.flag}
                    population={country.population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                    region={country.region}
                    capital={country.capital}
                    key={i}
                  />
                );
              })
            : loading
            ? "Loading"
            : data.map((country, i) => {
                const name = country.name;
                const flag = country.flag;
                const population = country.population.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
                const region = country.region;
                const capital = country.capital;

                return (
                  <Country
                    name={name}
                    flag={flag}
                    population={population}
                    region={region}
                    capital={capital}
                    key={i}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
