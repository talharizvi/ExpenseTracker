import {createStore} from 'redux';
import StateReducer from './reducer';

let store = createStore(StateReducer)

export default store;