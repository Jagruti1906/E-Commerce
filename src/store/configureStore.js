import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import cartReducer from "../reducers/AddtoCart";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      cartItem: cartReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
