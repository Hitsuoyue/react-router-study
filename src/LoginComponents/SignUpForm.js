import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter} from 'react-router';
import './SignUpForm.scss';
const FormItem = Form.Item;

@withRouter
@Form.create()
class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.model = this.props.model || 'login';
    }

    /**
     * 点击提交触发
     * @param e
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('this.props', this.props, e);
                const {history, location} = this.props;
                if (location.pathname !== e.key) {
                    history.push('success');
                }
            }
        });
    };

    /**
     * 跳转到注册页面
     * @returns {XML}
     */
    handleRegister = () => {
        const {history, location} = this.props;
        history.push(`/${this.model}/register`);
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

export default SignUpForm;