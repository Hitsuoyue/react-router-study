import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon, Button} from 'antd';
const SubMenu = Menu.SubMenu;
const {Sider} = Layout;
import connection from '../../redux/connection';
import sidebarConfig from '../../config/SidebarConfig';

@connection
class SideBar extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    }

    clickMenuItem = (e) => {
        const {history} = this.props.routerStore;
        history.push(e.key);
    }

    createMenuItem = () =>{
        let arr = sidebarConfig.SidebarArr;
        let items = [];
        arr.forEach(val =>{
            items.push(this.createItem(val));
        });
        return items;
    }

    createItem = (val, parentPath) => {
        let item = {};
        if(val.hasOwnProperty('children')){
            item = (
                <SubMenu key={val.path}
                         title={<span><Icon type={val.icon}/><span>{val.title}</span></span>}>
                    {this.createItem(val.children, val.path)}
                </SubMenu>
            )
        }else {
            let path = parentPath ? `${parentPath}${val.path}` : val.path;
            item = (
                <Menu.Item key={parentPath ? `${parentPath}${val.path}` : val.path}>
                    <Icon type={val.icon}/>
                    <span>{val.title}</span>
                </Menu.Item>
            )
        }
        return item;
    }

    render() {
        console.log('sidebar props',this.props);
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.clickMenuItem}>
                    {this.createMenuItem()}
                </Menu>
            </Sider>
        );
    }
}

export default SideBar;