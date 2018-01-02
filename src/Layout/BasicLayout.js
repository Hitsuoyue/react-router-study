import React, {Component} from 'react';
import {default as HeadBar} from '../Components/Header/Header';
import SideBar from '../Components/SideBar/SideBar';
import { Layout, Menu, Breadcrumb, Icon, Button} from 'antd';
const SubMenu = Menu.SubMenu;

const {Header, Footer, Sider, Content} = Layout;
import connection from '../redux/connection';

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
        this.setState({ collapsed });
    }

    render() {
        console.log('this.props', this.props);
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideBar/>
                <Layout>
                    <Header>
                        <HeadBar/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default connection(BasicLayout);