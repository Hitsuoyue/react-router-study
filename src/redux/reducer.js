const initialState = {
    userName: 'admin',
    passWord: 'admin'
};
const INPUT_CHANGED = 'INPUT_CHANGED';

export function inputChange(newToDo){
    console.log('newToDo', newToDo);
    return {
        type: INPUT_CHANGED,
        newToDo
    }
}

export default function reducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    console.log('newState',newState);
    switch (action.type){
        case INPUT_CHANGED:
            console.log('newToDo----reducer', action);
            return Object.assign(
                {},
                state,
                {newToDo: action.value}
            );
        default:
            return newState;
    }
}