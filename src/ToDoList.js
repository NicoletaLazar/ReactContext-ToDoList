import { Container, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import TodoItem from "./ToDoItem";
import { TodoContext } from "./ToDoContext";

const TodoList = () => {
  const [todos, _] = useContext(TodoContext);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};
export default TodoList;
