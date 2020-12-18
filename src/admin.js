import React, {Component} from 'react'
import {Col, Row} from "antd";
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "./pages/nomatch";
import {contentLayout} from './config/routerData'


export default class Admin extends Component {
  render() {
    const routes = contentLayout.map(route => {
      return (
        <Route path={route.path}
               key={route.path}
               exact={route.exact ?? true}
               component={route.component}
        />
      )
    })

    return (
      <div>
        <Row className="container">
          <Col span={4} className="nav-left">
            <NavLeft/>
          </Col>
          <Col span={20} className="main">
            <Header/>
            <Row className="content">
              <Switch>
                <Redirect to="/home" path="/" exact/>
                {routes}
                <Route component={NotFound}/>
              </Switch>
            </Row>
            <Footer/>
          </Col>
        </Row>
      </div>
    );
  }
}