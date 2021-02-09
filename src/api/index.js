import React from 'react';
import axios from 'axios';

// const apiKey = process.env.REACT_APP_API_KEY;
 
const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

// Персонаж : використовується для отримання всіх символів.
// Місцезнаходження : використовується для отримання всіх локацій.
// Епізод : використовується для отримання всіх епізодів.
// {
//     "characters": "https://rickandmortyapi.com/api/character",
//     "locations": "https://rickandmortyapi.com/api/location",
//     "episodes": "https://rickandmortyapi.com/api/episode"
//   }


// {
//     "info": {
//       "count": 671,
//       "pages": 34,
//       "next": "https://rickandmortyapi.com/api/character/?page=2",
//       "prev": null
//     },
//     "results": [
//       // ...
//     ]
//   }

// Отримайте одного персонажа
// https://rickandmortyapi.com/api/character/2

// Отримайте кілька персонажа
//  /character/[1,2,3]
// /character/1,2,3



//              filter
// species: відфільтрувати за даними видами.
// status: відфільтрувати за заданим статусом ( alive, deadабо unknown).
// gender: Фільтр даного статі ( female, male, genderlessабо unknown).
// https://rickandmortyapi.com/api/character/?name=rick&status=alive

// https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive

// filter
// https://rickandmortyapi.com/api/character/?page=1?species=Humanoid
// https://rickandmortyapi.com/api/character/?name=Rick%20Sanchez&status=Alive&species=Human&type=&gender=Male


export const characterFetch = (page, species, status, gender) => {
  return instance.get(`character?page=${page}&species=${species}&status=${status}&gender=${gender}`)
}