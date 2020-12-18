import {Component} from "react";
import {Button, Card, notification} from "antd";

class Notice extends Component {
  openNotification = (type, placement = 'topRight') => {
    notification[type]({
      message: "发工资了",
      description: "上个月考勤22填，迟到21天，实发10块零5毛！",
      placement
    })
  }

  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
        </Card>
        <Card title="通知提醒框方向" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>左上</Button>
          <Button type="primary" onClick={() => this.openNotification('info','bottomLeft')}>左下</Button>
          <Button type="primary" onClick={() => this.openNotification('warning','topRight')}>右上</Button>
          <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>右下</Button>
        </Card>
      </div>
    );
  }
}

export default Notice;