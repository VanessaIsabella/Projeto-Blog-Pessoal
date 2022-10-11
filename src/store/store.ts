import { tokenReducer } from './tokens/tokensReducer';
import {createStore} from 'redux';

const store=createStore(tokenReducer);

export default store;