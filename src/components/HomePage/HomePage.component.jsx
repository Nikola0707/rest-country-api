import Country from "../CountryCard/Country.component";
import Filter from "../Filter/Filter.component";
import Header from "../Header/Header.components";
import Search from "../Search/Search.component";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-content-container">
        <div className="search-filter-container">
          <Search />
          <Filter />
        </div>
        <div className="countries-container">
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
        </div>
      </div>
    </>
  );
};
export default HomePage;
