import { createStore } from "redux"
import rotateReducer from "../reducers/rotateReducer";

export default function configureStore (state = { rotating: true } ) {
    return createStore(rotateReducer,state)
}