import React, {Component} from 'react';
import {Layout} from 'antd';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import connection from '../redux/connection';
import SignUpForm from '../LoginComponents/SignInForm';
import SignInForm from '../LoginComponents/SignUpForm';
import Success from '../LoginComponents/Success';

const {Header, Content, Footer} = Layout;

@connection
class LoginLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.model = 'login';

    }

    /**
     *     通过地址，判断当前要渲染的组件
     */
    getCurrentForm = () => {
        const {pathname} = this.props.location;
        if(pathname){
            let pathArray = pathname.split('/');
            let path = pathArray[pathArray.length-1];
            switch (path){
                case 'register':
                    return SignInForm;
                    break;
                case 'success':
                    return Success;
                    break;
                case 'login':
                    return SignUpForm;
                    break;
                default:
                    return SignUpForm;
                    break;
            }
        }
    };

    render() {
        let CurrentForm = this.getCurrentForm();
        return (
            <Layout>
                <Content>
                    <Switch>
                        <CurrentForm model={this.model}/>
                    </Switch>
                </Content>
                <Footer style={{textAlign: 'center',width:'100%', position: 'absolute',bottom: 0}}>
                    Created by sylvia
                </Footer>
            </Layout>
        )
    }
}

export default LoginLayout;