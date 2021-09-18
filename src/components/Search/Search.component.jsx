import './Search.style.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Search = ({handleSearch}) =>{
    return(
        <div className="search-field">
           <div className="search-wrapper">
           <div className="icon-wrap"><AiOutlineSearch /></div>
            <input type="text" placeholder="Search for a country..." onChange={handleSearch}/>
           </div>
        </div>
    )
}

export default Search