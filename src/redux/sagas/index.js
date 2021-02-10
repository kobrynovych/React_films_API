import React from 'react'
import { takeEvery } from 'redux-saga/effects'
import { CHARACTER_FETCH } from '../actionTypes';
import { EPISODE_FETCH } from '../actionTypes';
import { characterSaga } from './characterSaga';
import { episodeSaga } from './episodeSaga';

export default function* rootSaga() {
    yield takeEvery(CHARACTER_FETCH, characterSaga);
    yield takeEvery(EPISODE_FETCH, episodeSaga);
}