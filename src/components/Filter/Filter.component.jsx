import "./Filter.style.css";

const Filter = ({handleFilter}) => {
  return (
    <div className="filter-container">
      <div className="select-wrapper">
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
