import "./Search.style.css";
import { AiOutlineSearch } from "react-icons/ai";
// React Redux
import { useSelector } from "react-redux";

const Search = ({ handleSearch }) => {
  // Redux State
  const changeBackgroundState = useSelector((state) => state.mode);
  return (
    <div className={changeBackgroundState ? "search-field-dark" : "search-field"}>
      <div className="search-wrapper">
        <div className="icon-wrap">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleSearch}
          className={changeBackgroundState ? "input-dark" : ''}
        />
      </div>
    </div>
  );
};

export default Search;
