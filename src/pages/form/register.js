import {Component} from "react";
import {
  Card,
  Form,
  Button,
  Input,
  Icon,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload, message, Checkbox
} from "antd";
import moment from "moment";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class RegisterForm extends Component {
  state = {loading: false}

  handleChange = info => {
    const status = info.file.status;
    if (status === 'uploading') {
      this.setState({loading: true});
    } else if (status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, avatar =>
        this.setState({
          avatar,
          loading: false,
        }),
      );
    }
  };

  handleSubmit = () => {
    const {form} = this.props;
    form.validateFieldsAndScroll()
    const userInfo = form.getFieldsValue();

    console.log(userInfo)
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {xs: 20, sm: {span: 4, offset: 1}},
      wrapperCol: {xs: 20, sm: 16}
    }
    return (
      <div>
        <Card title="注册表单">
          <Form {...formItemLayout}>
            <FormItem label="用户名" required>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [{required: true, message: "用户名不能为空"}]
                })(
                  <Input
                    prefix={<Icon type="user" style={{color: '#00000025'}}/>}
                    placeholder="username"/>
                )
              }
            </FormItem>
            <FormItem label="密码" required>
              {
                getFieldDecorator('password', {
                  initialValue: ''
                })(
                  <Input.Password
                    prefix={<Icon type="lock" style={{color: '#00000025'}}/>}
                    placeholder="password"/>
                )
              }
            </FormItem>
            <FormItem label="性别" required>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" required>
              {
                getFieldDecorator('age', {
                  initialValue: '18'
                })(
                  <InputNumber min={0} max={120} formatter={v => `${v}岁`}/>
                )
              }
            </FormItem>
            <FormItem label="当前状态" required>
              {
                getFieldDecorator('state', {
                  initialValue: '1'
                })(
                  <Select>
                    <Select.Option value="1">风华浪子</Select.Option>
                    <Select.Option value="2">咸鱼一条</Select.Option>
                    <Select.Option value="3">北大才子</Select.Option>
                    <Select.Option value="4">百度FE</Select.Option>
                    <Select.Option value="5">创业北斗</Select.Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好">
              {
                getFieldDecorator('interest', {
                  initialValue: []
                })(
                  <Select mode="multiple" filterOption>
                    <Select.Option value="1">游泳</Select.Option>
                    <Select.Option value="2">篮球</Select.Option>
                    <Select.Option value="3">Java</Select.Option>
                    <Select.Option value="4">骑行</Select.Option>
                    <Select.Option value="5">王者荣耀</Select.Option>
                    <Select.Option value="6">CS-GO</Select.Option>
                    <Select.Option value="7">爬山</Select.Option>
                    <Select.Option value="8">麦霸</Select.Option>
                    <Select.Option value="9">跑步</Select.Option>
                    <Select.Option value="10">吃饭</Select.Option>
                    <Select.Option value="11">小说</Select.Option>
                    <Select.Option value="12">逛街</Select.Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚">
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: false
                })(
                  <Switch/>
                )
              }
            </FormItem>
            <FormItem label="生日" required>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment("2008-08-08")
                })(
                  <DatePicker showTime
                              format="YYYY-MM-DD HH:mm:ss"/>
                )
              }
            </FormItem>
            <FormItem label="联系地址">
              {
                getFieldDecorator('address', {
                  initialValue: ''
                })(
                  <TextArea autoSize={{minRows: 3, maxRows: 3}}/>
                )
              }
            </FormItem>
            <FormItem label="早起时间" required>
              {
                getFieldDecorator('time', {
                  initialValue: moment('08:00:00', "HH:mm:ss")
                })(
                  <TimePicker/>
                )
              }
            </FormItem>
            <FormItem label="头像" required>
              {
                getFieldDecorator('avatar', {
                  initialValue: null
                })(
                  <Upload listType='picture-card'
                          showUploadList={false}
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          onChange={this.handleChange}
                  >
                    {this.state.avatar
                      ? <img src={this.state.avatar} alt={'avatar'} style={{width: '100%'}}/>
                      : (
                        <div>
                          <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                        </div>)
                    }
                  </Upload>
                )
              }
            </FormItem>
            <FormItem wrapperCol={{xs: 20, sm: {span: 16, offset: 5}}}>
              {
                getFieldDecorator('ensure', {
                  valuePropName: 'checked',
                  initialValue: false
                })(
                  <Checkbox>我已经阅读过<a href={"#"}>莫克协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem wrapperCol={{xs: 20, sm: {span: 16, offset: 5}}}>
              <Button type='primary' onClick={this.handleSubmit}>注册</Button>
              <Button type='danger'
                      style={{marginLeft:20}}
                      onClick={()=>this.props.form.resetFields()}>重置</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const EnhanceForm = Form.create()(RegisterForm)
export default EnhanceForm;