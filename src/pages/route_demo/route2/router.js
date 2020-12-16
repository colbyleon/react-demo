import {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Main from './Main'
import About from './About'
import Topics from './Topics'
import Home from './Home'

class IRoute extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Route path="/main" render={() =>
            <Main>
              <Route path="/main/a" component={About}/>
            </Main>
          }/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </Home>
      </Router>
    );
  }
}

export default IRoute;

