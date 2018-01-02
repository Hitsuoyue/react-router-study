import { connect } from 'react-redux';
import {actionCreate} from "./reducer";

function mapStateToProps(state) {
    return {
        store: state // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch,
        actionCreate: actionCreate
    } // here we'll soon be mapping actions to props
}
export default function connection(component) {
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component);
}