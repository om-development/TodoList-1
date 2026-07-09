import axios from "axios";

const fetchTodos = async () => {
  const response = await axios.get("https://dummyjson.com/todos");
  return response.data.todos;
};

const fetchRandomTodo = async () => {
  const response = await axios.get("https://dummyjson.com/todos/random");
  return response.data;
};

export { fetchTodos, fetchRandomTodo };