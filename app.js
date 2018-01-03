import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    IndexRoute,
    Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/createStore';
import BasicLayout from './src/Layout/BasicLayout';
import About from './src/Components/About/About';
import Topics from './src/Components/Topics/Topics';
import AuthExample from './src/ex';

const store = configureStore();

class APP extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/topics">topics</Link></li>
                        </ul>
                        <Route exact path='/' component={BasicLayout}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/topics' component={Topics}/>

                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));