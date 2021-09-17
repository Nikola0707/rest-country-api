import './Header.style.css'
import {BiMoon} from 'react-icons/bi'
const Header = () => {
    return(
        <div className="header-container">
            <div>Where in the world?</div>
            <div className="flex-align"><BiMoon /> <p>Dark Mode</p></div>
        </div>
    )
}

export default Header;