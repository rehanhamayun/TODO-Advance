import { GET_TODO_LIST } from "./types";
import axios from "axios";

export const getAllTodos = async (data, dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3001/api/tasks");
    dispatch({
      type: GET_TODO_LIST,
      payload: data,
    });
  } catch (error) {
    return console.log(error);
  }
};

export const createTodoTask = async (data, dispatch) => {
  try {
    const res = await axios.post("http://localhost:3001/api/tasks", data);
    console.log("🚀 ~ file: services.js ~ line 25 ~ createTodoTask ~ res", res);
    if (res.status == 201) {
      dispatch({
        type: "CREATE_TODO_TASK",
        payload: data,
      });
    }
  } catch (error) {
    return console.log(error);
  }
};
export const deleteTodoTask = async (data, dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:3001/api/tasks/${data}`);
    console.log("🚀 ~ file: services.js ~ line 25 ~ createTodoTask ~ res", res);
    if (res.status == 204) {
      dispatch({
        type: "DELETE_TODO_TASK",
        payload: data,
      });
    }
  } catch (error) {
    return console.log(error);
  }
};

export const editTodoTask = async (data, dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:3001/api/tasks/${data.id}`,
      data
    );
    console.log("🚀 ~ file: services.js ~ line 25 ~ createTodoTask ~ res", res);
    if (res.status == 204) {
      dispatch({
        type: "EDIT_TODO_TASK",
        payload: data,
      });
    }
  } catch (error) {
    return console.log(error);
  }
};
