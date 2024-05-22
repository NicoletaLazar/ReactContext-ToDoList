import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  const initialTodos = [
    {
      id: 1,
      title: "Wake-up at 7",
      completed: false,
    },
    {
      id: 2,
      title: "Take a shower",
      completed: false,
    },
    {
      id: 3,
      title: "Eat healthy breakfast",
      completed: false,
    },
    {
      id: 4,
      title: "Go to gym",
      completed: true,
    },
    {
      id: 5,
      title: "Walk the dog",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(getTodos ? getTodos : initialTodos);
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
