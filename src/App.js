import './App.css';
import Header from './components/Header/Header.components'
import Search from './components/Search/Search.component';
import Filter from './components/Filter/Filter.component';
import Country from './components/CountryCard/Country.component';
import CountryInfo from './components/CountryPage/CountryInfo.component'
function App() {
  return (
    <div className="App">
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
      <CountryInfo />
    </div>
  );
}

export default App;
