import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component{
    render(){
        return(
            <div>
                About Page!
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
            </div>
        )
    }
}