import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
    render(){
        return(
            <div>
                Home Page!
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
            </div>
        )
    }
}