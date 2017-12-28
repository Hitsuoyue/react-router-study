import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './src/Basic';
import Example from './src/Example';
import ParamsExample from './src/UrlParameters';

class APP extends Component{
    render(){
        return(
            <ParamsExample/>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));