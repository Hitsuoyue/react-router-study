/**
 * Created by sylvia on 2018/1/5.
 */
import React, { Component } from 'react';
import connection from '../../../redux/connection';

@connection
export default class UserManage extends Component{
    constructor(props){
        super(props);
    }

    //通过地址，判断当前要渲染的组件
    getCurrentComponent = () => {
        const {pathname} = this.props.location;
        if(pathname){
            let pathArray = pathname.split('/');
            let path = pathArray[pathArray.length-1];

        }
    };

    componentWillReceiveProps(nextProps){
        // console.log('Index========nextProps', nextProps);
    }

    render(){
        let CurrentComponent = this.getCurrentComponent();
        return(
            <div>user-manage</div>
        )
    }
}