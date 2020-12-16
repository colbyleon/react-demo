import {Component} from "react";
import {Card, Button, Icon, Radio} from "antd";
import './ui.less'

class Buttons extends Component {
  state = {
    loading: false,
    iconLoading: false,
    value2:'Pear'
  };

  enterLoading = () => {
    this.setState({loading: true});
    setTimeout(() => this.setState(({loading: false})), 2000)
  };

  enterIconLoading = () => {
    this.setState({iconLoading: true});
    setTimeout(() => this.setState(({iconLoading: false})), 2000)
  };

  render() {
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
          <Button type="link">Link</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button type="primary" shape="circle" icon="search"/>
          <Button type="primary" shape="circle">A</Button>
          <Button type="primary" icon="edit">Search</Button>
          <Button shape="circle" icon="plus"/>
          <Button icon="search">Search</Button>
          <br/>
          <Button shape="round" icon="check"/>
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search"/>
          <Button type="dashed" icon="search">Search</Button>
        </Card>
        <Card title="幽灵按钮" className="card-wrap">
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="danger" ghost>
            danger
          </Button>
          <Button type="link" ghost>
            link
          </Button>
        </Card>
        <Card title="Loading 按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon="poweroff"
            size="large"
            loading={this.state.iconLoading}
            onClick={this.enterIconLoading}
          >
            Click me!
          </Button>
          <br/>
          <Button type="danger" shape="round"
                  onClick={() => this.setState({loading: false, iconLoading: false})}
                  icon="check"
          />
        </Card>
        <Card title="按钮组" className="card-wrap">
          <Button.Group>
            <Button type="primary"><Icon type="left"/>返回</Button>
            <Button type="primary">1</Button>
            <Button type="primary">前进<Icon type="right"/></Button>
          </Button.Group>
        </Card>
        <Card title="Radio" className="card-wrap">
          <Radio.Group options={options}
                       onChange={(e)=>this.setState(({value2:e.target.value}))}
                       value={this.state.value2} />

        </Card>
      </div>
    );
  }
}

export default Buttons;