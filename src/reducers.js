// reducers.js
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default todoReducer;
