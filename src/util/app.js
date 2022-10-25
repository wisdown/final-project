import axios from "axios";

export async function getTodos() {
  try {
    const {
      data: { getAllTodos },
    } = await axios.get("http://localhost:3001/api/v1/todos");
    return getAllTodos;
  } catch (error) {
    console.error(error.message);
    // si algo sale mal se retorna un arreglo vacios
    return [];
  }
}

export async function patchTodos(todoId, newValues) {
  try {
    axios.patch(`http://localhost:3001/api/v1/todos/${todoId}`, {
      ...newValues,
      title: newValues.text,
    });
  } catch (error) {
    console.error(error.message);
  }
}
