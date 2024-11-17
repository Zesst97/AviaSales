import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import errorReducer from './reducers/errorReducer';
import searchIdReducer from './reducers/searchIdReducer';
import sortingReducer from './reducers/sortingReducer';
import stopsFilterReducer from './reducers/stopsFilterReducer';
import ticketReducer from './reducers/ticketReducer';

const reducers = combineReducers({
  tickets: ticketReducer,
  sorting: sortingReducer,
  stopsFilter: stopsFilterReducer,
  searchId: searchIdReducer,
  serverError: errorReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
