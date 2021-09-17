import './Search.style.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Search = () =>{
    return(
        <div className="search-field">
           <div className="search-wrapper">
           <div className="icon-wrap"><AiOutlineSearch /></div>
            <input type="text" placeholder="Search for a country..." />
           </div>
        </div>
    )
}

export default Search