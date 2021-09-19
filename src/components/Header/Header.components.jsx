import "./Header.style.css";
import { BiMoon } from "react-icons/bi";
import { IoSunnyOutline } from "react-icons/io5";

//React Redux
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux/index";

const Header = () => {
  // Redux
  const changeBackgroundState = useSelector((state) => state.mode);
  const theme = useSelector((state) => state.dark);

  console.log(changeBackgroundState);
  const dispatch = useDispatch();

  const { changeBackground } = bindActionCreators(actions, dispatch);

  return (
    <div className={changeBackgroundState ? "header-container-dark" : "header-container"}>
      <div>Where in the world?</div>
      <div
        className="flex-align"
        onClick={() => {
          changeBackground(!changeBackgroundState);
        }}
      >
        {
          changeBackgroundState ? <><IoSunnyOutline /> <p>Light Mode</p></> : <><BiMoon /> <p>Dark Mode</p></>
        }
        
        
      </div>
    </div>
  );
};

export default Header;
