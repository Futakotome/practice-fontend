import React from 'react'
import {Button, Card, Col, Empty, Form, Input, message, Modal, Row} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import Search from "antd/lib/input/Search";

@Form.create()
class Client extends React.Component {

    projectClientUrl = new URL("http://localhost:8089/pratice/project/client")

    state = {
        addClientModalVisible: false,
    }

    handleClientAdd = () => {
        this.props.form.validateFieldsAndScroll(((errors, values) => {
            if (errors) {
                message.warning("请填写正确的客户信息.")
            } else {
                fetch(this.projectClientUrl, {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify(values.clientName)
                }).then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                }).then((data) => {
                    message.success(data.name + " 保存成功!")
                })
            }
        }))
    }

    closeModal(a) {
        this.setState({
            [a]: false
        })
    }

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };

        const {addClientModalVisible} = this.state
        const cardContent = `客户管理相关业务。`
        return (
            <div>
                <CustomBreadcrumb arr={['项目', '客户']}/>
                <TypingCard source={cardContent}/>
                <Card bordered={false}>
                    <Row gutter={6}>
                        <Col span={3}>
                            <Button type="primary"
                                    onClick={() => this.setState({addClientModalVisible: true})}>新增客户</Button>&emsp;
                            <Modal
                                visible={addClientModalVisible}
                                title='新增客户'
                                onOk={() => this.handleClientAdd()}
                                onCancel={() => this.closeModal("addClientModalVisible")}>
                                <Form layout='horizontal' style={{width: '100%', margin: '0 auto'}}>
                                    <Form.Item label={"客户名字"} {...formItemLayout}>
                                        {
                                            getFieldDecorator("clientName", {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "请填写客户名字."
                                                    }
                                                ]
                                            })(<Input/>)
                                        }
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Col>
                        <Col span={3}>
                            <Search addonBefore={"搜索:"} placeholder="输入客户名字" size={'default'}
                                    onSearch={value => alert(value)}/>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Empty>
                        <Button type="primary"
                                onClick={() => this.setState({addClientModalVisible: true})}>新增客户</Button>
                    </Empty>
                </Card>
            </div>
        )
    }
}

export default Client