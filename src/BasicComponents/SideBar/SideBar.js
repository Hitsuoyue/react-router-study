import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Layout, Menu, Breadcrumb, Icon, Button} from 'antd';
const SubMenu = Menu.SubMenu;
const {Sider} = Layout;
import connection from '../../redux/connection';
import sidebarConfig from '../../config/SidebarConfig';
import './SideBar.scss';

@withRouter
@connection
class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
        this.defaultSelectedKeys = [];
        this.defaultOpenKeys = [];
        this.subMenuKeys = [];
        this.itemMenuKeys = [];
        this.menuItems = [];
    }

    /**
     * 初始化侧边菜单栏
     */
    initSideMenu = () => {
        this.menuItems = [];
        let arr = sidebarConfig.SidebarArr;
        arr.forEach(val => {
            this.menuItems.push(this.createItem(val));
        });
    };

    createItem = (value, parentPath) => {
        let items = [];
        if (value.hasOwnProperty('children')) {
            let path = parentPath ? `${parentPath}${value.path}` : value.path;
            this.subMenuKeys.push(path);
            items.push(
                <SubMenu key={path}
                         title={<span><Icon type={value.icon}/><span>{value.title}</span></span>}>
                    {this.createChildItems(value, path)}
                </SubMenu>
            );
        } else {
            let path = parentPath ? `${parentPath}${value.path}` : value.path;
            this.itemMenuKeys.push(path);
            items.push(
                <Menu.Item key={path}>
                    <Icon type={value.icon}/>
                    <span>{value.title}</span>
                </Menu.Item>
            )
        }
        return items;
    }

    createChildItems = (value, path) => {
        let items = [];
        value.children.forEach(val => {
            items.push(this.createItem(val, path));
        })
        return items;
    }

    /**
     * 初始化侧边栏展开
     * @param props
     */
    initSelectedMenu = (props) => {
        const {location} = props;
        let path = location.pathname;
        this.defaultSelectedKeys.push(path);
        let defaultOpenKeys = [];
        let pathArr = path.split('/');
        pathArr.forEach((item,index) => {
            if(index === 0){
                return;
            }
            if(!this.subMenuKeys.includes(`${this.defaultOpenKeys[this.defaultOpenKeys.length-1] ||''}/${item}`)){
                this.defaultSelectedKeys.push(`${this.defaultOpenKeys[this.defaultOpenKeys.length-1] ||''}/${item}`);
                return;
            }
            this.defaultOpenKeys.push(`${this.defaultOpenKeys[this.defaultOpenKeys.length-1] ||''}/${item}`);
        });
    }

    componentWillMount(){
        this.initSideMenu();
        this.initSelectedMenu(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.initSideMenu();

        this.initSelectedMenu(nextProps);
    }

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };

    clickMenuItem = (e) => {

        const {history, location} = this.props;
        if (location.pathname !== e.key) {
            history.push(e.key);
        }
    };

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo">
                    Logo
                </div>
                <Menu theme="dark" defaultOpenKeys={this.defaultOpenKeys} defaultSelectedKeys={this.defaultSelectedKeys} mode="inline" onClick={this.clickMenuItem}>
                    {this.menuItems}
                </Menu>
            </Sider>
        );
    }
}

export default SideBar;