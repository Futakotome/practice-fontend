import React from 'react'
import {Col, Divider, Row, Table} from 'antd'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";
import TypingCard from '../../../components/TypingCard'
import Classes from "../Classes";

class QueryClass extends React.Component {

    classes: Classes[]

    componentDidMount() {
        fetch("http://localhost:8082/pratice/v1/classes/class/99c0d068-2617-4aab-8006-ddb9729ec7a0", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
            })
    }


    state = {
        classes: [
            {
                id: '1',
                className: '测试1'
            }, {
                id: '2',
                className: '测试2'
            }
        ],
        columns: [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            }, {
                title: '班级名',
                key: 'className',
                dataIndex: 'className'
            }, {
                title: '操作',
                key: 'opt',
                render: (text: string, record: Classes) => (
                    <span>
                        <a>修改 {record.className}</a>
                        <Divider type={'vertical'}/>
                        <a>删除</a>
                    </span>
                )
            }
        ]

    }

    rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: Classes[]) => {
            console.log(`selectedRowKeys:${selectedRowKeys}`, `selectedRows:${selectedRows}`)
        },
        getCheckboxProps: (record: Classes) => ({
            disabled: record.className === 'Disabled User',
            name: record.className
        })

    }

    render() {
        const cardContent = ' 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。'

        return (
            <div>
                <CustomBreadcrumb arr={['班级', '查询']}/>
                <TypingCard source={cardContent} height={164}/>
                <Row gutter={16}>
                    <Col>
                        <Table rowSelection={{type: 'checkbox', ...this.rowSelection}}
                               dataSource={this.state.classes}
                               columns={this.state.columns} rowKey='id'/>
                    </Col>

                </Row>
            </div>
        )
    }
}


export default QueryClass