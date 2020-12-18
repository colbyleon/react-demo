import {Component} from "react";
import './ui.less'
import {Card, Icon, Tabs} from "antd";

const {TabPane} = Tabs

class STabs extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        tab: <span><Icon type="qq"/>QQ</span>,
        content: 'Content of Tab 1',
        key: '1'
      },
      {tab: <span><Icon type="gitlab"/>Gitlab</span>, content: 'Content of Tab 2', key: '2'},
      {
        tab: <span><Icon type="twitter"/>Twitter</span>,
        content: 'Content of Tab 3',
        key: '3',
      },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = activeKey => {
    this.setState({activeKey});
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const {panes} = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({tab: <span><Icon type="google"/>Google</span>, content: 'Content of new Tab', key: activeKey});
    this.setState({panes, activeKey});
  };

  remove = targetKey => {
    let {activeKey} = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({panes, activeKey});
  };

  render() {
    const tabPanes = this.state.panes.map(pane => (
      <TabPane tab={pane.tab} key={pane.key} closable={pane.closable}>
        {pane.content}
      </TabPane>
    ));
    return (
      <Card title="Tab页签">
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {tabPanes}
        </Tabs>
      </Card>
    );
  }
}

export default STabs;