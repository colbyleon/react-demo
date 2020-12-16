import {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Main from './Main'
import About from './About'
import Topics from './Topics'

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route path="/" exact >{Main}</Route>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default Home;