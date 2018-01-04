import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    IndexRoute,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/createStore';
import BasicLayout from './src/Layout/BasicLayout';

const store = configureStore();

class APP extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Route path='/' component={BasicLayout}/>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));