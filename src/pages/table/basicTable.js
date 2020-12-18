import {Component} from "react";
import {Card, Table} from "antd";

class BasicTable extends Component {
  state = {dataSource2: []}

  componentDidMount() {
    const dataSource = [
      {
        "tagCategoryId": 1,
        "tagCategoryName": "活跃",
        "status": 0,
        "parentId": 0,
        "createTime": "2020-12-02 11:17:40",
        "updateTime": "2020-12-02 12:21:34",
        "subtree": [
          {
            "tagCategoryId": 2,
            "tagCategoryName": "活跃天数",
            "status": 0,
            "parentId": 1,
            "createTime": "2020-12-02 11:18:09",
            "updateTime": "2020-12-02 11:18:09",
            "subtree": []
          },
          {
            "tagCategoryId": 3,
            "tagCategoryName": "登录次数",
            "status": 0,
            "parentId": 1,
            "createTime": "2020-12-02 11:18:19",
            "updateTime": "2020-12-02 11:18:19",
            "subtree": []
          },
          {
            "tagCategoryId": 4,
            "tagCategoryName": "在线时长",
            "status": 0,
            "parentId": 1,
            "createTime": "2020-12-02 11:18:26",
            "updateTime": "2020-12-02 11:18:26",
            "subtree": []
          }
        ]
      },
      {
        "tagCategoryId": 5,
        "tagCategoryName": "消费",
        "status": 0,
        "parentId": 0,
        "createTime": "2020-12-02 11:18:37",
        "updateTime": "2020-12-02 11:18:37",
        "subtree": [
          {
            "tagCategoryId": 6,
            "tagCategoryName": "近n日付费额",
            "status": 0,
            "parentId": 5,
            "createTime": "2020-12-02 11:19:16",
            "updateTime": "2020-12-02 11:19:16",
            "subtree": []
          },
          {
            "tagCategoryId": 7,
            "tagCategoryName": "近n日付费次",
            "status": 0,
            "parentId": 5,
            "createTime": "2020-12-02 11:19:27",
            "updateTime": "2020-12-02 11:19:27",
            "subtree": []
          },
          {
            "tagCategoryId": 8,
            "tagCategoryName": "最近N日内付费天",
            "status": 0,
            "parentId": 5,
            "createTime": "2020-12-02 11:19:59",
            "updateTime": "2020-12-02 11:19:59",
            "subtree": []
          }
        ]
      },
      {
        "tagCategoryId": 9,
        "tagCategoryName": "特性",
        "status": 0,
        "parentId": 0,
        "createTime": "2020-12-02 11:20:14",
        "updateTime": "2020-12-02 11:20:14",
        "subtree": [
          {
            "tagCategoryId": 10,
            "tagCategoryName": "梦幻花园家园",
            "status": 0,
            "parentId": 9,
            "createTime": "2020-12-02 11:20:59",
            "updateTime": "2020-12-02 11:20:59",
            "subtree": []
          },
          {
            "tagCategoryId": 11,
            "tagCategoryName": "地铁跑酷",
            "status": 0,
            "parentId": 9,
            "createTime": "2020-12-02 11:21:06",
            "updateTime": "2020-12-02 11:21:06",
            "subtree": []
          }
        ]
      }
    ];

    this.setState({
      dataSource
    })
  }

  render() {

    const columns = [
      {
        title: 'id',
        dataIndex: 'tagCategoryId',
      },
      {
        title: '分类名',
        dataIndex: 'tagCategoryName',
      },
      {
        title: '状态',
        dataIndex: 'status',
      }, {
        title: '创建时间',
        dataIndex: 'createTime',
      }, {
        title: '更新时间',
        dataIndex: 'updateTime'
      }
    ];

    return (
      <div>
        <Card title="基础表格">
          <Table
            dataSource={this.state.dataSource}
            columns={columns}
            bordered
            childrenColumnName="subtree"
            rowKey='tagCategoryId'
            defaultExpandAllRows
            expandRowByClick
            indentSize={24}
          />
        </Card>
        <Card title="动态数据渲染表格" style={{marginTop: 10}}>
          <Table
            dataSource={this.state.dataSource2}
            columns={columns}
            bordered
            childrenColumnName="subtree"
            rowKey='tagCategoryId'
            defaultExpandAllRows
            expandRowByClick
            indentSize={24}
          />
        </Card>
      </div>
    );
  }
}

export default BasicTable;