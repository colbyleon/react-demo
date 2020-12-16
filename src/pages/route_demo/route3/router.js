import {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Main from './Main'
import About from './About'
import Topics from './Topics'
import Home from './Home'
import Info from "./info";
import NotFound from "./NotFound";

class IRoute extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/main" render={() =>
              <Main>
                <Route path="/main/:mainId" component={Info}/>
              </Main>
            }/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route component={NotFound}/>
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default IRoute;

