import {createStore, applyMiddleware, combineReducers} from 'redux';
import toDoList from './reducer';
console.log('toDoList',toDoList);
//组合reducer
const reducer = combineReducers({
    toDoList
});

//自定义中间件
function logger({getState}) {
    return(next)=>(action)=>{
        console.log('will dispatch', action);

        //调用middleware链中下一个middleware的dispatch
        let returnValue = next(action);

        console.log('state after dispatch', getState());

        //一般会是action本身，除非后面的middleware修改了它

        return returnValue;
    }
}

const createStoreWithModifyLogger = applyMiddleware(logger)(createStore);

//创建store
const configureStore = (initialState) => createStoreWithModifyLogger(reducer, initialState);

// const configureStore = () => createStore(reducer);

export default configureStore;