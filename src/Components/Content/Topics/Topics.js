import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

export default class Topics extends Component {
    constructor(props){
        super(props);
        this.path = 'topics';
    }
    render() {
        return (
            <div>
                Topics Page!
                <ul>
                    <li>
                        <Link to={`${this.path}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.path}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.path}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>
                <Route exact path={this.path} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        )
    }
}