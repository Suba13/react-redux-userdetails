import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import '../css/style.css';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
function getUsers (){
    return   fetch(' http://localhost:3001/user');
}
function loadUser(){
    console.log(getUsers())
    return function(dispatch){
        return getUsers().then(
            data=>dispatch({
                type:"LOAD",
                payload:data.json()
            }),
            error=>console.log(error)
        );
    }
}
store.dispatch(
    loadUser()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
