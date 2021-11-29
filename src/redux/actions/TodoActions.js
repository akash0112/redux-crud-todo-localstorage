import { ADD_TODO, DELETE_TODO ,UPDATE_TODO} from "../constants/ActionTypes";
export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};
export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: { id },
  });
};
export const updateTodo = (todo) => (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: todo,
    });
  };
