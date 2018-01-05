import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Test extends Component{
    render(){
        return(
            <div>
                Test Page!
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        )
    }
}