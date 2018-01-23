import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import {withRouter} from 'react-router';
import './SignInForm.scss';
import servers from '../server';
const FormItem = Form.Item;
const signIn = servers.signIn;

@withRouter
@Form.create()
class SignInForm extends Component {
    constructor(props){
        super(props);
        this.model = this.props.model || 'login';
        console.log(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){

    }

    successFun = (values,data, e) => {
        console.log('values', values, data);
        if(Array.isArray(data) && data[0].UserName === values.userName && data[0].PassWord === values.password){
            message.success('登录成功，稍后将跳转到个人首页');
            console.log('111');
            setTimeout(() => {
                const {history, location} = this.props;
                if (location.pathname !== e.key) {
                    history.push('success');
                }
            }, 2000);
        }else{
            message.error('用户名或密码错误，请重新登陆！');
            return;
        }
    }

    /**
     * 点击提交触发
     * @param e
     */
    handleSubmit = (e) => {
        let me = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                signIn().then(function (value) {
                    console.log('value', value, me);
                    me.successFun(values, value, e);
                });

            }
        });
    };

    /**
     * 跳转到注册页面
     * @returns {XML}
     */
    handleRegister = () => {


        window.open('http://localhost:3200/');
        window.addEventListener('message',function (e) {
            console.log('收到了！')
        });


        // const {history, location} = this.props;
        // history.push(`/${this.model}/register`);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or
                    <Button className='register-btn'
                        onClick={this.handleRegister}>
                        register now!
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default SignInForm;