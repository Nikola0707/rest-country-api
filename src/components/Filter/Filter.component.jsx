import './Filter.style.css'

const Filter = () => {
    return(
        <div className="filter-container">
            <div className="select-wrapper">
            <select name="region" id="region">
            <option value="Filter by Region" defaultValue>Filter by Region</option>
            <option value="afrika">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
            </div>
    </div>
    )
}

export default Filter;