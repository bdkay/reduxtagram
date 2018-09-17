import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import { comments, postComments } from './comments';

// Combine reducers
const rootReducer = combineReducers({ posts, comments, routing: routerReducer});

export default rootReducer;