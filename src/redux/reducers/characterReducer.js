import React from 'react'
// import { SET_CHARACTER, SET_IS_LOADING, SET_ERROR_MESS } from '../actionTypes/index';
import { SET_CHARACTER } from '../actionTypes/index';

const initialState = {
    // pending: false,
    // error: '',
    pages: 0,
    count: 0,
    results: [
        // {
        //     id: null,
        //     name: "",
        //     status: "",
        //     species: "",
        //     type: "",
        //     gender: "",
        //     origin: {
        //         name: "",
        //         url: ""
        //     },
        //     location: {
        //         name: "",
        //         url: ""
        //     },
        //     image: "",
        //     episode: [
        //         "",
        //         ""
        //     ],
        //     url: "",
        //     created: ""
        // },
    ],
};

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTER:
            return {
                ...state,
                error: '',
                pages: action.payload.info.pages,
                count: action.payload.info.count,
                results: [...action.payload.results],     // []  20
            };
        default:
            return state;
    }
}