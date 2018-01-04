import React, {Component} from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import {default as HeadBar} from '../Components/Header/Header';
import SideBar from '../Components/SideBar/SideBar';
import {Layout} from 'antd';
import connection from '../redux/connection';
import sidebarConfig from '../config/SidebarConfig';

const {Header, Footer, Content} = Layout;

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
        let redirectRoute = this.createRedirectRoute(arr[0].children, arr[0].path);
        items.push(redirectRoute);
        return items;
    };

    /**
     * 产生初始页面路由
     */
    createRedirectRoute = (val, parentPath) => {
        let items = [];
        if(val.hasOwnProperty('children')){
            items = this.createRedirectRoute(val.children, `${parentPath}${val.path}`);
        }else{
            items.push(
                <Redirect exact from='/' to={`${parentPath}${val.path}`}  key={`${parentPath}${val.path}`}/>
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