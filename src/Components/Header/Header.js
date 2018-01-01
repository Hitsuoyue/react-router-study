import React,{Component} from 'react';
import {Icon, Button } from 'antd';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false
        };
    }

    toggleCollapsed = (e) => {
        // this.setState({
        //     collapsed: !this.state.collapsed,
        // });
    };

    render() {
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
            </div>
        );
    }
}

export default Header;