import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//假定在 http://mozilla.org/foo.html 页执行下列代码：
let stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
//地址栏会显示 http://mozilla.org/bar.html，但不会导致浏览器加载 bar.html 甚至
//检查 bar.html 是否存在。假定用户现在跳转到 http://google.com ，然后点击返回按钮，
//这时，地址栏会显示 http://mozilla.org/bar.html，并且页面会获取一个包含了复制的
// stateObj 的 popstate 事件，这个页面会看起来像 foo.html，尽管页面在 popstate
//事件的过程中改变内容。
//如果我们再点击返回，网址会变为 http://mozilla.org/foo.html，文档会再次获取另一个
//stateObj 为空对象的 popstate 事件。同时，返回不会改变文档内容。

const ParamsExample = () => (
    <Router>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li><Link to="/netflix">Netflix</Link></li>
                <li><Link to="/zillow-group">Zillow Group</Link></li>
                <li><Link to="/yahoo">Yahoo</Link></li>
                <li><Link to="/modus-create">Modus Create</Link></li>
            </ul>

            <Route path="/:id" component={Child}/>
        </div>
    </Router>
)

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

export default ParamsExample;