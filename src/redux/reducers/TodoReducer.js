import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../constants/ActionTypes";
import { uuid } from "uuidv4";
const initialState = {
  todos: [],
};
const TodoReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            title: action.payload.title,
            description: action.payload.description,
            id: uuid(),
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case UPDATE_TODO: {
      const { todos } = state;
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].title = action.payload.title;
      todos[index].description = action.payload.description;
      return state;
    }
    default:
      return state;
  }
};
export default TodoReducer;
