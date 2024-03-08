import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../todos.slice";
import { clearAllTodos } from "../todos.slice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const onAddTodo = () => {
    const payload = {
      ...todo,
      id: uuidv4(),
      createdAt: new Date().getTime(),
    };
    console.log("Add Todo clicked: ", payload);
    //dispatch({ type: "udayTodos/addTodo", payload });
    dispatch(addTodo(payload));
    setTodo({ title: "", description: "" });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const onClearAllTodos = () => {
    console.log("all clear");
    dispatch(clearAllTodos());
  };

  return (
    <div>
      <p>Add new Todo</p>
      <div>
        <input
          type="text"
          placeholder="Enter todo title"
          value={todo.title}
          name="title"
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Enter todo description"
          value={todo.description}
          name="description"
          onChange={onInputChange}
        />
        <button onClick={onAddTodo}>Add todo</button>
        <button onClick={onClearAllTodos}>Clear All Todos</button>
      </div>
    </div>
  );
};

export default AddTodo;
