import { combineReducers } from 'redux';
import types from './todos-types';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  'todos/add': (state, { payload }) => [...state, { payload }],
  'todos/delete': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
