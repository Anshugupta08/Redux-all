import AddTodo from "./Views/AddTodo.Component";
import ListTodo from "./Views/ListTodo.Component";

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default Todo;
