import {Component} from 'react'
import {Col, Row} from "antd";
import './index.less'
import utils from "../../utils/utils";
import axios from '../../axios'

const {formatDate} = utils

class Header extends Component {
  state = {username: '', date: formatDate(new Date().getTime())}

  componentDidMount() {
    this.setState({
      username: '河畔一角'
    })
    this.task = setInterval(() => {
      let sysTime = formatDate(new Date().getTime());
      this.setState(({date: sysTime}));
    }, 1000)
    this.getWeatherApiDate();
  }

  componentWillUnmount() {
    clearInterval(this.task)
  }

  getWeatherApiDate() {
    const districtId = 440305;
    const raw = `http://api.map.baidu.com/weather/v1/?district_id=${encodeURIComponent(districtId)}&data_type=all&ak=52giHvfF2HoHAMipPxfKAWt1d5j9yu7o`;
    const url = `http://10.100.0.100:8100/jsonp?url=${encodeURIComponent(raw)}`;
    axios.jsonp({url: url})
      .then(res => {
        const cur = res.result.forecasts[0];
        this.setState({
          pic: "http://api.map.baidu.com/images/weather/day/duoyun.png",
          weather: `${cur.text_day}(${cur.low}~${cur.high})`
        })
      })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.username}</span>
            <a href="./">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.date.toLocaleString()}</span>
            <span className="weather-img">
              <img src={this.state.pic} alt=""/>
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header