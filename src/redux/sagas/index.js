import React from 'react'
import { takeEvery } from 'redux-saga/effects'
import { CHARACTER_FETCH } from '../actionTypes';
import { characterSaga } from './characterSaga';
// import { photosSaga } from './photosSaga';

export default function* rootSaga() {
    yield takeEvery(CHARACTER_FETCH, characterSaga);
    // yield takeEvery(PHOTO_FETCH, photosSaga);
}