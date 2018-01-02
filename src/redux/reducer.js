const initialState = {
    userName: 'admin',
    passWord: 'admin'
};

export function actionCreate(type, content) {
    return {
        type: type,
        content: content
    }
}

export default function reducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type){
        case 'CLICK_BUTTON':
            return Object.assign(
                {},
                state,
                {button: action.content}
            );
        default:
            return newState;
    }
}