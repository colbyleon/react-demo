import './App.css';
import {Component} from 'react'
import Admin from "./admin";
import Home from './pages/route_demo/route1/Home'
import IRouter from './pages/route_demo/route3/router'
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login";

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/order/detail" component={Admin}/>
        <Route path="/" component={Admin}/>
      </Switch>)
  }

}

export default App;
