import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';

const allStoreEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(allReducers, allStoreEnhancers);

export default store;
