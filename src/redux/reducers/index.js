import React from 'react'
import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import episodeReducer from './episodeReducer';
import allReducer from './allReducer';

const rootReducer = combineReducers({
    character: characterReducer,
    episode: episodeReducer,
    all: allReducer,
});
export default rootReducer;