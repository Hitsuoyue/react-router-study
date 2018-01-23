import React, {Component} from 'react';
import {withRouter} from 'react-router';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './SignInForm.scss';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

@withRouter
@Form.create()
class Success extends Component {
    constructor(props){
        super(props);
        this.model = this.props.model || 'login';
        this.state = {

        };
    }

    render() {

        return (
            <div className='success-form'>
                <h3>Register success!</h3>
            </div>
        );
    }
}

export default Success;