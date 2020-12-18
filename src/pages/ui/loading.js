import {Component} from "react";
import {Card, Button, Spin, Icon, Alert, Switch} from "antd";
import './ui.less'

class Loading extends Component {
  state={
    spinning: true
  }

  render() {
    const icon = <Icon type="plus" style={{fontSize:24}}/>
    const iconLoading = <Icon type="loading" style={{fontSize:24}}/>

    return (
      <div>
        <Card title="Spin用法" className="card-wrap" style={{fontSize: 24}}>
          <Spin size="small"/>
          <Spin style={{margin: '0 10px'}}/>
          <Spin size="large"/>
          <Spin indicator={icon} style={{margin: '0 10px'}} spinning={true}/>
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert message="React "
                 description="欢迎来到React高级实战课程"
                 type="info"/>
          <Spin spinning={this.state.spinning}>
            <Alert message="React "
                   description="欢迎来到React高级实战课程"
                   type="warning"/>
          </Spin>
          <Spin tip="加载中..." spinning={this.state.spinning}>
            <Alert message="React "
                   description="欢迎来到React高级实战课程"
                   type="success"/>
          </Spin>
          <Spin tip="加载中..." indicator={iconLoading} spinning={this.state.spinning}>
            <Alert message="React "
                   description="欢迎来到React高级实战课程"
                   type="success"/>
          </Spin>
          <span style={{marginRight:10}}>加载状态:</span>
          <Switch checked={this.state.spinning}
                  onChange={value=>this.setState(({spinning:value}))}/>
        </Card>
      </div>
    );
  }
}

export default Loading;