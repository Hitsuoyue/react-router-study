import React, { Component } from 'react';
import { withRouter } from 'react-router'
import connection from '../../../../redux/connection';
import {Button} from 'antd';
import servers from '../../../../server';
const Login  = servers.Login;

@withRouter
@connection
export default class CreateProject extends Component{
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        // console.log('nextProps', nextProps);
    }

    login = () => {
        Login();
    }

    render(){
        // console.log('this.props', this.props);
        return(
            <div>
                <h3>Create New Project</h3>
                <Button onClick={this.login}>登录</Button>
            </div>            
        )
    }
}