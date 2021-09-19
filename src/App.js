import "./App.css";
import Header from "./components/Header/Header.components";
import HomePage from "./components/HomePage/HomePage.component";
import CountryInfo from "./components/CountryPage/CountryInfo.component";

//React Redux
import { useSelector } from "react-redux";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // redux state
  const changeBackgroundState = useSelector((state) => state.mode);

  return (
    <div className={changeBackgroundState ? "App-dark" : "App"}>
      <Header />
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
