import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/createStore';

import About from './src/Components/About/About';
import Topics from './src/Components/Topics/Topics';
import BasicLayout from './src/Layout/BasicLayout';

const store = configureStore();

class APP extends Component{
    render(){
        console.log('store===', store);
        return(
            <Provider store={store}>
                <BasicLayout/>
            </Provider>
        )
    }
}

/*
<Provider store={store}>
    <Router>
        <div>
            <Route exact path='/' component={BasicLayout}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/topics' component={Topics}/>
        </div>
    </Router>
</Provider>
*/

ReactDOM.render(<APP/>, document.getElementById('app'));