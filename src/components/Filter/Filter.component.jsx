import "./Filter.style.css";

// React Redux
import { useSelector } from "react-redux";

const Filter = ({handleFilter}) => {
  // redux state
  const changeBackgroundState = useSelector(state => state.mode)

  return (
    <div className={changeBackgroundState ? "filter-container-dark" : "filter-container"}>
      <div className={changeBackgroundState ? "select-wrapper-dark" : "select-wrapper"}>
        <select name="region" id="region" onChange={e => handleFilter(e.target.value)}>
          <option value="Filter by Region" defaultValue>
            Filter by Region
          </option>
          <option value="Afrika">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
