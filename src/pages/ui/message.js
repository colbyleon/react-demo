import {Component} from "react";
import {message, Button, Card} from 'antd';


class Message extends Component {
  success = () => {
    message.success('This is a success message');
  };

  error = () => {
    message.error('This is an error message', 3, this.errorClose);
  };

  warning = () => {
    message.warning('This is a warning message');
  };

  errorClose = () => {
    message.error("关闭错误,Bug", 3, this.error)
  }

  loading = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  render() {
    return (
      <Card title="全局提示框" className="card-wrap">
        <Button type="primary" onClick={this.success}>Success</Button>
        <Button type="primary" onClick={this.error}>Error</Button>
        <Button type="primary" onClick={this.warning}>Warning</Button>
        <Button type="primary" onClick={this.loading}>Loading</Button>
        <Button type="primary" onClick={message.destroy}>destroy</Button>
      </Card>
    );
  }
}

export default Message;