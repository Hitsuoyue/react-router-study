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
import About from './src/Components/About/About';
import Topics from './src/Components/Topics/Topics';

const store = configureStore();

class APP extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <h2>Accounts</h2>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/topics">topics</Link></li>
                        </ul>
                        <div style={{backgroundColor:'#92ffa5'}}>
                            <Switch>
                                <Route path="/about" component={About}/>
                                <Route path="/topics" component={Topics}/>
                                <Route path="/" component={BasicLayout}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));