import "./App.css";
import HomePage from "./components/HomePage/HomePage.component";
import CountryInfo from "./components/CountryPage/CountryInfo.component";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
