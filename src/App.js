import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FormsList from "./pages/FormsList";
import Eligibility from "./pages/Eligibility";
import DefendantForm from "./pages/DefendantForm";
import PlaintiffForm from "./pages/PlaintiffForm";
import protectiveorder from "./pages/protectiveorder";
import affadavit from "./containers/affadavit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }

  componentDidMount() {
    // this.interval = setInterval(
    //   () => this.setState({ timer: this.state.timer + 1 }),
    //   1000
    // );
  }

  componentDidUnmount() {
    //   clearInterval(this.interval);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/list" component={FormsList} />
          <Route
            exact
            path="/eligibility"
            render={() => (
              <Eligibility
                title={
                  "this page has been loaded for " +
                  this.state.timer +
                  " seconds"
                }
              />
            )}
          />
          <Route exact path="/defendant" component={DefendantForm} />
          <Route exact path="/plaintiff" component={PlaintiffForm} />
          <Route exact path="/protectiveorder" component={protectiveorder} />
          <Route exact path="/affadavit" component={affadavit} />
        </Switch>
      </Router>
    );
  }
}
export default App;
