import React, {Component} from 'react';
import {Layout} from 'antd';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import connection from '../redux/connection';

const {Header, Content, Footer} = Layout;

@connection
class LoginLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (
            <Layout>
                <Footer style={{textAlign: 'center',width:'100%', position: 'absolute',bottom: 0}}>
                    Created by sylvia
                </Footer>
            </Layout>
        )
    }
}

export default LoginLayout;