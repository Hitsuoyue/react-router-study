import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/createStore';
import BasicLayout from './src/Layout/BasicLayout';
import LoginLayout from './src/Layout/LoginLayout';
import './src/style/index.scss';

const store = configureStore();

class APP extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Redirect exact from='/' to='login' key='routeRedirectRoute'/>
                        <Route path='/login' component={LoginLayout}/>
                        <Route path='/' component={BasicLayout}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));