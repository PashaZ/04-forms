import shortid from 'shortid';
import types from './todos-types';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction(types.ADD, text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});

const deleteTodo = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

export default { addTodo, deleteTodo, changeFilter };
