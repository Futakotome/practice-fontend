import React from 'react'
import {withRouter, Switch, Redirect} from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(() => import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

//项目
const ButtonDemo = LoadableComponent(() => import('../../routes/Project/ButtonDemo/index'))
const IconDemo = LoadableComponent(() => import('../../routes/Project/IconDemo/index'))

//班级
const ClassInsert = LoadableComponent(() => import('../../routes/Class/InsertClass/index'))
const ClassQuery = LoadableComponent(() => import('../../routes/Class/QueryClass/index'))
const StepsDemo = LoadableComponent(() => import('../../routes/Class/StepsDemo/index'))

//师资库
const FormDemo1 = LoadableComponent(() => import('../../routes/Teacher/FormDemo/FormDemo1'))
const FormDemo2 = LoadableComponent(() => import('../../routes/Teacher/FormDemo/FormDemo2'))
const UploadDemo = LoadableComponent(() => import('../../routes/Teacher/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = LoadableComponent(() => import('../../routes/Display/CarouselDemo/index'))
const CollapseDemo = LoadableComponent(() => import('../../routes/Display/CollapseDemo/index'))
const ListDemo = LoadableComponent(() => import('../../routes/Display/ListDemo/index'))
const TableDemo = LoadableComponent(() => import('../../routes/Display/TableDemo/index'))
const TabsDemo = LoadableComponent(() => import('../../routes/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = LoadableComponent(() => import('../../routes/Feedback/SpinDemo/index'))
const ModalDemo = LoadableComponent(() => import('../../routes/Feedback/ModalDemo/index'))
const NotificationDemo = LoadableComponent(() => import('../../routes/Feedback/NotificationDemo/index'))

//其它
const AnimationDemo = LoadableComponent(() => import('../../routes/Other/AnimationDemo/index'))
const GalleryDemo = LoadableComponent(() => import('../../routes/Other/GalleryDemo/index'))
const DraftDemo = LoadableComponent(() => import('../../routes/Other/DraftDemo/index'))
const ChartDemo = LoadableComponent(() => import('../../routes/Other/ChartDemo/index'))
const LoadingDemo = LoadableComponent(() => import('../../routes/Other/LoadingDemo/index'))
const ErrorPage = LoadableComponent(() => import('../../routes/Other/ErrorPage/index'))
const SpringText = LoadableComponent(() => import('../../routes/Other/SpringText/index'))

//关于
const About = LoadableComponent(() => import('../../routes/About/index'))

@withRouter
class ContentMain extends React.Component {
    render() {
        return (
            <div style={{padding: 16, position: 'relative'}}>
                <Switch>
                    <PrivateRoute exact path='/home' component={Home}/>

                    <PrivateRoute exact path='/home/project/button' component={ButtonDemo}/>
                    <PrivateRoute exact path='/home/project/icon' component={IconDemo}/>

                    <PrivateRoute exact path='/home/classes/insert' component={ClassInsert}/>
                    <PrivateRoute exact path='/home/classes/query' component={ClassQuery}/>
                    <PrivateRoute exact path='/home/classes/steps' component={StepsDemo}/>

                    <PrivateRoute exact path='/home/teacher/form/basic-form' component={FormDemo1}/>
                    <PrivateRoute exact path='/home/teacher/form/step-form' component={FormDemo2}/>
                    <PrivateRoute exact path='/home/teacher/upload' component={UploadDemo}/>

                    <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo}/>
                    <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo}/>
                    <PrivateRoute exact path='/home/display/list' component={ListDemo}/>
                    <PrivateRoute exact path='/home/display/table' component={TableDemo}/>
                    <PrivateRoute exact path='/home/display/tabs' component={TabsDemo}/>

                    <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo}/>
                    <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo}/>
                    <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo}/>

                    <PrivateRoute exact path='/home/other/animation' component={AnimationDemo}/>
                    <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo}/>
                    <PrivateRoute exact path='/home/other/draft' component={DraftDemo}/>
                    <PrivateRoute exact path='/home/other/chart' component={ChartDemo}/>
                    <PrivateRoute exact path='/home/other/loading' component={LoadingDemo}/>
                    <PrivateRoute exact path='/home/other/404' component={ErrorPage}/>
                    <PrivateRoute exact path='/home/other/springText' component={SpringText}/>

                    <PrivateRoute exact path='/home/about' component={About}/>

                    <Redirect exact from='/' to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default ContentMain