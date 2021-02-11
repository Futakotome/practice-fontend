import React from 'react'
import {Col, Divider, Row, Table} from 'antd'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";

class QueryClass extends React.Component {

    classUrl = new URL("http://localhost:8089/pratice/v1/classes/class")

    componentDidMount() {
        this.fetch()
    }

    state = {
        loading: false,
        classes: [],
        pagination: {}
    }

    fetch = (params = {}) => {
        console.log('params:', params)
        this.setState({loading: true})
        Object.keys(params).forEach(key => this.classUrl.searchParams.append(key, params[key]))
        fetch(this.classUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
                const pagination = {...this.state.pagination}
                pagination.total = 200;
                this.setState({
                    loading: false,
                    classes: data,
                    pagination
                })
            })
    }

    rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows) => {
            console.log(`selectedRowKeys:${selectedRowKeys}`, `selectedRows:${selectedRows}`)
        },
        getCheckboxProps: (record) => ({
            disabled: record.className === 'Disabled User',
            name: record.className
        })

    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = {...this.state.pagination}
        pager.current = pagination.current
        this.setState({
            pagination: pager
        })
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        })
    }

    render() {
        const columns = [
            {
                title: '编号',
                key: 'classId',
                dataIndex: 'classId'
            }, {
                title: '班级名',
                key: 'className',
                dataIndex: 'className'
            }, {
                title: '操作',
                key: 'opt',
                render: (text: string, record) => (
                    <span>
                        <a>修改 {record.className}</a>
                        <Divider type={'vertical'}/>
                        <a>删除</a>
                    </span>
                )
            }
        ]
        return (
            <div>
                <CustomBreadcrumb arr={['班级', '查询']}/>
                <Row gutter={16}>
                    <Col>
                        <Table rowSelection={{type: 'checkbox', ...this.rowSelection}}
                               loading={this.state.loading}
                               onChange={this.handleTableChange}
                               pagination={this.state.pagination}
                               dataSource={this.state.classes}
                               columns={columns}/>
                    </Col>

                </Row>
            </div>
        )
    }
}


export default QueryClass