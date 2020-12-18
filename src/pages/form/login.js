import {Component} from "react";
import {Button, Card, Checkbox, Form, Icon, Input, message} from "antd";
import {Link} from "react-router-dom";

const FormItem = Form.Item

class FormLogin extends Component {

  handleSubmit = () => {
    const userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.username}登录成功,密码: ${userInfo.password}`)
      }
    })
  }

  render() {

    const {getFieldDecorator} = this.props.form

    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input
                prefix={<Icon type="user" style={{color: '#00000025'}}/>}
                placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input
                prefix={<Icon type="lock" style={{color: '#00000025'}}/>}
                placeholder="请输入密码" type="password"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{marginTop: 10}}>
          <Form layout="horizontal" style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    {required: true, message: "用户名不能为空", whitespace: true},
                    {min: 5, max: 10, message: "长度不在范围内"},
                    {pattern: /^[a-zA-Z]\w+$/g, message: "用户名必须为字母开头，只能包含字母或数字"}
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{color: '#00000025'}}/>}
                    placeholder="请输入用户名"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: []
                })(
                  <Input
                    prefix={<Icon type="lock" style={{color: '#00000025'}}/>}
                    placeholder="请输入密码" type="password"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <Link to='#' style={{float: 'right'}}>忘记密码</Link>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const wrappedFormLogin = Form.create({name: 'formLogin'})(FormLogin);
export default wrappedFormLogin;