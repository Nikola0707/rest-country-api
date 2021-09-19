import "./App.css";
import Header from "./components/Header/Header.components"
import HomePage from "./components/HomePage/HomePage.component";
import CountryInfo from "./components/CountryPage/CountryInfo.component";

//React Redux
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./redux/index"

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // redux state
  const state = useSelector((state) => state.mode)
  
  const [background, setBackground] = useState('')
  
  return (
    <div className="App" style={{background: background}}>
      <Header setBackground={setBackground}/>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/country">
            <CountryInfo />
          </Route>
          <Route exact path="/country-border">
            <CountryInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
