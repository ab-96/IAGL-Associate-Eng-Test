import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

export function addTodo(task) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:9091/api/todo", { task });
      dispatch({
        type: ADD_TODO, 
        payload: response.data 
      });
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };
}