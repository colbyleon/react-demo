import {Component} from 'react'
import {Menu, Icon} from 'antd';
import './index.less'
import {menuConfig} from '../../config'
import {NavLink} from "react-router-dom";

const {SubMenu} = Menu;


class NavLeft extends Component {
  state = {
    menuTreeNode: []
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({menuTreeNode: menuTreeNode});
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key} >{item.title}</NavLink>
        </Menu.Item>)
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft