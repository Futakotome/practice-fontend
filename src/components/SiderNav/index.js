import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
    {
        title: '首页',
        icon: 'home',
        key: '/home'
    },
    {
        title: '项目',
        icon: 'laptop',
        key: '/home/project',
        subs: [
            {key: '/home/project/client', title: '客户', icon: '',},
            {key: '/home/project/summary', title: '汇总', icon: '',},
        ]
    },
    {
        title: '班级',
        icon: 'bars',
        key: '/home/classes',
        subs: [
            {key: '/home/classes/insert', title: '新增', icon: ''},
            {key: '/home/classes/query', title: '查询', icon: ''},
            {key: '/home/classes/steps', title: '步骤条', icon: ''},
        ]
    },
    {
        title: '师资库',
        icon: 'edit',
        key: '/home/teacher',
        subs: [
            {
                key: '/home/teacher/form',
                title: '表单',
                icon: '',
                subs: [
                    {key: '/home/teacher/form/basic-form', title: '基础表单', icon: ''},
                    {key: '/home/teacher/form/step-form', title: '分步表单', icon: ''}
                ]
            },
            {key: '/home/teacher/upload', title: '上传', icon: ''},
        ]
    },
    {
        title: '显示组件',
        icon: 'desktop',
        key: '/home/display',
        subs: [
            {key: '/home/display/carousel', title: '轮播图', icon: ''},
            {key: '/home/display/collapse', title: '折叠面板', icon: ''},
            {key: '/home/display/list', title: '列表', icon: ''},
            {key: '/home/display/table', title: '表格', icon: ''},
            {key: '/home/display/tabs', title: '标签页', icon: '',},
        ]
    },
    {
        title: '反馈组件',
        icon: 'message',
        key: '/home/feedback',
        subs: [
            {key: '/home/feedback/modal', title: '对话框', icon: '',},
            {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
            {key: '/home/feedback/spin', title: '加载中', icon: '',}
        ]
    },
    {
        title: '其它',
        icon: 'bulb',
        key: '/home/other',
        subs: [
            {key: '/home/other/animation', title: '动画', icon: '',},
            {key: '/home/other/gallery', title: '画廊', icon: '',},
            {key: '/home/other/draft', title: '富文本', icon: ''},
            {key: '/home/other/chart', title: '图表', icon: ''},
            {key: '/home/other/loading', title: '加载动画', icon: ''},
            {key: '/home/other/404', title: '404', icon: ''},
            {key: '/home/other/springText', title: '弹性文字', icon: ''},
        ]
    },
    {
        title: '关于',
        icon: 'info-circle-o',
        key: '/home/about'
    }
]


class SiderNav extends React.Component {
    render() {

        return (
            <div style={{height: '100vh', overflowY: 'scroll'}}>
                <div style={styles.logo}></div>
                <CustomMenu menus={menus}/>
            </div>
        )
    }
}

const styles = {
    logo: {
        height: '32px',
        background: 'rgba(255, 255, 255, .2)',
        margin: '16px'
    }
}

export default SiderNav