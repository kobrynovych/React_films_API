import React from 'react'
// import { SET_CHARACTER, SET_IS_LOADING, SET_ERROR_MESS } from '../actionTypes/index';
import { SET_EPISODE } from '../actionTypes/index';

const initialState = {
    // pending: false,
    // error: '',
    pages: 0,
    count: 0,
    results: [
        // {
        //     id: 1,
        //     name: "Pilot",
        //     air_date: "December 2, 2013",
        //     episode: "S01E01",
        //     characters: [
        //         "https://rickandmortyapi.com/api/character/1",
        //         "https://rickandmortyapi.com/api/character/2",
        //         "https://rickandmortyapi.com/api/character/435"
        //     ],
        //     url: "https://rickandmortyapi.com/api/episode/1",
        //     created: "2017-11-10T12:56:33.798Z"
        // },
    ],
};

export default function episodeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EPISODE:
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

// 
// results: [
//     {
//     id: 1,
//     name: "Pilot",
//     air_date: "December 2, 2013",
//     episode: "S01E01",
//     characters: [
//         "https://rickandmortyapi.com/api/character/1",
//         "https://rickandmortyapi.com/api/character/2",
//         "https://rickandmortyapi.com/api/character/35",
//         "https://rickandmortyapi.com/api/character/38",
//         "https://rickandmortyapi.com/api/character/62",
//         "https://rickandmortyapi.com/api/character/92",
//         "https://rickandmortyapi.com/api/character/127",
//         "https://rickandmortyapi.com/api/character/144",
//         "https://rickandmortyapi.com/api/character/158",
//         "https://rickandmortyapi.com/api/character/175",
//         "https://rickandmortyapi.com/api/character/179",
//         "https://rickandmortyapi.com/api/character/181",
//         "https://rickandmortyapi.com/api/character/239",
//         "https://rickandmortyapi.com/api/character/249",
//         "https://rickandmortyapi.com/api/character/271",
//         "https://rickandmortyapi.com/api/character/338",
//         "https://rickandmortyapi.com/api/character/394",
//         "https://rickandmortyapi.com/api/character/395",
//         "https://rickandmortyapi.com/api/character/435"
//     ],
//     url: "https://rickandmortyapi.com/api/episode/1",
//     created: "2017-11-10T12:56:33.798Z"
// },