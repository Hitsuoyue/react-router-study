import React, { Component } from 'react';
import { withRouter } from 'react-router'
import connection from '../../../../redux/connection';
import {Button} from 'antd';

@withRouter
@connection
export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    createNewProject = (e) => {
        console.log()
        const {history, location} = this.props;
        if(location.pathname.split('/')[location.pathname.split('/').length-1] !== 'create'){
            history.push('create');
        }
    };

    componentWillReceiveProps(nextProps){
        console.log('nextProps', nextProps);
    }

    render(){
        console.log('this.props', this.props);
        return(
            <div>
                <h3>Homepage</h3>
                <Button onClick={this.createNewProject}>create new pro</Button>
            </div>            
        )
    }
}