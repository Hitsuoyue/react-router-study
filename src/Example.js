import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Topics from './Topics/Topics';

class Example extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/topics' component={Topics}/>
                </div>
            </Router>
        )
    }
}
export default Example;