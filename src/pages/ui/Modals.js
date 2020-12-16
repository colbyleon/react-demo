import {Component} from "react";
import {Card, Button, Icon, Modal} from "antd";
import './ui.less'

class Modals extends Component {
  state = {}


  handleOpen = (type) => {
    this.setState(({[type]: true}))
  }

  handleClick = (action, type) => {
    this.setState(({[type]: false}))
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Modal
          title="Open"
          visible={this.state.showModal1}
          onOk={() => this.handleClick('ok', 'showModal1')}
          onCancel={() => this.handleClick('cancel', 'showModal1')}
        >
          欢迎
        </Modal>
        <Modal
          title="自定义页脚"
          visible={this.state.showModal2}
          onOk={() => this.handleClick('ok', 'showModal2')}
          onCancel={() => this.handleClick('cancel', 'showModal2')}
          okText="好" cancelText="算了"
        >
          嘿嘿嘿
        </Modal>
        <Modal
          title="自定义页脚"
          visible={this.state.showModal3}
          onOk={() => this.handleClick('ok', 'showModal3')}
          onCancel={() => this.handleClick('cancel', 'showModal3')}
          style={{top: 20}}
        >
          嘿嘿嘿
        </Modal>
        <Modal
          title="自定义页脚"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onOk={() => this.handleClick('ok', 'showModal4')}
          onCancel={() => this.handleClick('cancel', 'showModal4')}
        >
          嘿嘿嘿
        </Modal>
      </div>
    );
  }
}

export default Modals;