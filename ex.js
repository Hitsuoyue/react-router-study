import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

const Child = ({ match }) => (
    <div>
        <h3>child</h3>
        <li><Link to='/netflix:netflixId'>netflixId</Link></li>
    </div>
)
const Child1 = ({ match }) => (
    <div>
        <h3>child1</h3>
        <li><Link to='/netflix:netflixId'>netflixId</Link></li>
    </div>
)
const Child2 = ({ match }) => (
    <div>
        <h3>child2</h3>
        <li><Link to='/netflix:netflixId'>netflixId</Link></li>
    </div>
)
const Child3 = ({ match }) => (
    <div>
        <h3>child3</h3>
        <li><Link to='/netflix:netflixId'>netflixId</Link></li>
    </div>
)

class APP extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li><Link to="/">child</Link></li>
                        <li><Link to="/child1">child1</Link></li>
                        <li><Link to="/child2">child2</Link></li>
                        <li><Link to="/child3">child3</Link></li>
                    </ul>
                    <div style={{border:'1px solid #f00'}}>
                        <Switch>
                            <Route path="/child3" component={Child3}/>
                            <Route path="/child2" component={Child2}/>
                            <Route path="/child1" component={Child1}/>
                            <Route path="/" component={Child}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));