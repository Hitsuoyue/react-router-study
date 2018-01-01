import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {default as HeadBar} from '../Components/Header/Header';
import SideBar from '../Components/SideBar/SideBar';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { connect } from 'react-redux';
import {
    inputChange
} from "../redux/reducer";

class BasicLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('this.props', this.props);

        return(
            <Layout>
                <Header>
                    <HeadBar/>
                </Header>
                <Layout>
                    <Sider>
                        <SideBar/>
                    </Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
function mapStateToProps(state) {
    return {
        toDoApp: state // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: (value) => dispatch(inputChange(value))
    } // here we'll soon be mapping actions to props
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicLayout);

// export default BasicLayout;