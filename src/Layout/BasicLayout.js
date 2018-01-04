import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import {default as HeadBar} from '../Components/Header/Header';
import SideBar from '../Components/SideBar/SideBar';
import About from '../Components/About/About';
import Topics from '../Components/Topics/Topics';
import {Layout, Menu, Breadcrumb, Icon, Button} from 'antd';
const SubMenu = Menu.SubMenu;

const {Header, Footer, Sider, Content} = Layout;
import connection from '../redux/connection';
import sidebarConfig from '../config/SidebarConfig';

@connection
class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };

    }

    handleClick = (e) => {
        const {dispatch, actionCreate} = this.props;
        dispatch(actionCreate('CLICK_BUTTON', '111'));
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    creatRoute = () => {
        let arr = sidebarConfig.SidebarArr;
        let items = [];
        arr.forEach(val =>{
            items.push(
                <Route path={val.path} component={val.component} key={val.path}/>
            );
            console.log('val', val, val.hasOwnProperty('children'));
            if(val.hasOwnProperty('children')){
                console.log('val', val, val.hasOwnProperty('children'));
                items.push(
                    <Route path={`${val.path}:${val.path}Id`} component={val.component} key={`${val.path}:${val.path}Id`}/>
                );
            }
        });
        return items;
    }

    render() {
        const routerStore = {
            history: this.props.history,
            location: this.props.location,
            match: this.props.match
        }
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SideBar routerStore={routerStore}/>
                <Layout>
                    <Header>
                        <HeadBar/>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Switch>
                            {this.creatRoute()}
                            <Route path="/about" component={About}/>
                            <Route path="/topics" component={Topics}/>
                            <Redirect exact from='/' to="/about"/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;
// export default connection(BasicLayout);