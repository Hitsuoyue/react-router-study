import React, {Component} from 'react';
import {Layout} from 'antd';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import connection from '../redux/connection';
import sidebarConfig from '../config/SidebarConfig';
import SideBar from '../BasicComponents/SideBar/SideBar';
import HeadBar from '../BasicComponents/Header/Header';

const {Header, Content, Footer} = Layout;

@connection
class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };

    }

    /**
     * 根据 sidebar 配置产生路由
     * @returns {Array}
     */
    createRoute = () => {
        let arr = sidebarConfig.SidebarArr;
        let items = [];
        arr.forEach((val) => {
            items.push(
                <Route path={val.path} component={val.component} key={val.path}/>
            );
            if (val.hasOwnProperty('children')) {
                let path = val.path.split('/')[1];
                items.push(
                    <Route path={`${val.path}:${path}Id`} component={val.component} key={`${val.path}:${val.path}Id`}/>
                );
            }
        });
        //产生初始页面的路由 RedirectRoute，放在 Route 最后
        // let redirectRoute = this.createRedirectRoute(arr[0]);
        let redirectRoute = <Redirect exact from='/' to='login'/>;
        items.push(redirectRoute);
        return items;
    };

    /**
     * 产生初始页面路由
     */
    createRedirectRoute = (val, parentPath) => {
        let items = [];
        let path = parentPath ? `${parentPath}${val.path}` : val.path;
        if(val.hasOwnProperty('children')){
            items = this.createRedirectRoute(val.children[0], path);
        }else{
            items.push(
                <Redirect exact from='/' to={path}  key={path}/>
            )
        }
        return items;
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SideBar/>
                <Layout>
                    <Header>
                        <HeadBar/>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Switch>
                            {this.createRoute()}
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Created by sylvia
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;