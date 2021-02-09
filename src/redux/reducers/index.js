import React from 'react'
import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
// import photosReducer from './photosReducer';

const rootReducer = combineReducers({
    character: characterReducer,
    // photos: photosReducer,
});
export default rootReducer;