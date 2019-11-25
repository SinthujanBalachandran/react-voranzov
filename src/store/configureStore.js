import {createStore}from 'redux';
import countReducer from './../components/counterReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

export const configureStore = () => {
    const store = createStore(countReducer,devToolsEnhancer());
    return store;
}