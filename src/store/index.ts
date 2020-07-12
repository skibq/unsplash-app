import {createStore, applyMiddleware, Action} from 'redux'
import rootReducer from './reducers'
import { ICollectionsState } from "./collections";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { initialState } from "./collections"

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    IGlobalState,
    unknown,
    Action<string>>

export interface IGlobalState extends ICollectionsState {}

// @ts-ignore
const logger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

export default store;
