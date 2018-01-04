import React, { Component } from 'react';
import connection from '../../../redux/connection';
import HomePage from './HomePage/HomePage';
import CreateProject from './CreateProject/CreateProject';

@connection
export default class About extends Component{
    constructor(props){
        super(props);
    }

    //通过地址，判断当前要渲染的组件
    getCurrentComponent = () => {
        const {pathname} = this.props.location;
        if(pathname){
            let pathArray = pathname.split('/');
            let path = pathArray[pathArray.length-1];
            switch (path){
                case 'create':
                    return CreateProject;
                    break;
                default:
                    return HomePage;
                    break;
            }
        }
    };

    componentWillReceiveProps(nextProps){
        console.log('Index========nextProps', nextProps);
    }

    render(){
        let CurrentComponent = this.getCurrentComponent();
        return(
            <CurrentComponent/>
        )
    }
}