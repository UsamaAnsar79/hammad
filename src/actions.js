// actions.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    text,
    completed: false
  }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});
