import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.scss';
import initialState from './initial-state';
import reducer from './reducers';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { startListeningToAuthChanges } from './actions/auth';
import { startListeningForUsers } from './actions/users';
import { startListeningForTeams } from './actions/team';

//TODO
  //Research best way to grab the most recent data from the database if it exists
  //replace initial state with whatever is in the database
  //examine when to use cloud functions and when to use event listeners on nodes of the database data
  //replace initialState object with database reference to that persons team to show their team when the page rerenders

  //enable facebook authentication
  //find package for creating screenshot
  //fetch data for initial state players
  //create css for isHovered over to cause small movement
  //make card being dragged dissappear (is isDragging, add css display: none)


injectTapEventPlugin();

const middleware = [ thunk ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

ReactDOM.render(<Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForUsers());
store.dispatch(startListeningForTeams());
