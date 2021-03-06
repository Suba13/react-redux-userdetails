import {combineReducers} from 'redux';
import OrderReducer from './reducer-order';
import OrderDetailReducer from './reducer-order-list';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    item: OrderReducer,
    orderItem: OrderDetailReducer
});

export default allReducers
