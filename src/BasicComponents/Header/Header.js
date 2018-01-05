import React,{Component} from 'react';
import {Icon, Button } from 'antd';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false
        };
    }

    render() {
        return (
            <div style={{ width: 256,color: '#fff' }}>
                header
            </div>
        );
    }
}

export default Header;