
import { createStore } from 'redux';
import ReducerTangGiam from './ReducerTangGiam';


const Store = createStore(ReducerTangGiam);
Store.getState();

export default Store;
