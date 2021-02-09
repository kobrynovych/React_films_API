import React from 'react'
import { SET_CHARACTER, SET_IS_LOADING, SET_ERROR_MESS } from '../actionTypes/index';

const initialState = {
    pending: false,
    error: '',
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
        case SET_IS_LOADING:
            return {
                ...state,
                pending: !state.pending,
            };
        case SET_CHARACTER:
            return {
                ...state,
                error: '',
                pages: action.payload.info.pages,
                count: action.payload.info.count,
                results: [...action.payload.results],     // []  20
            };
        case SET_ERROR_MESS:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
// 
// info: {
//     count: 26,
//     pages: 2,
//     next: "https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive",
//     prev: null
//     },
// results: [
//     {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//     name: "Earth (C-137)",
//     url: "https://rickandmortyapi.com/api/location/1"
//     },
//     location: {
//     name: "Earth (Replacement Dimension)",
//     url: "https://rickandmortyapi.com/api/location/20"
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     episode: [
//     "https://rickandmortyapi.com/api/episode/1",
//     "https://rickandmortyapi.com/api/episode/41"
//     ],
//     url: "https://rickandmortyapi.com/api/character/1",
//     created: "2017-11-04T18:48:46.250Z"
//     },