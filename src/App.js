import { ChakraProvider, Heading } from "@chakra-ui/react";
import React from "react";
import { TodoProvider } from "./ToDoContext";
import TodoList from "./ToDoList";
import TodoForm from "./TodoForm";

function App() {
  return (
    <TodoProvider>
      <ChakraProvider>
        <Heading mb={3} textAlign="center">
          To Do List
        </Heading>
        <br />
        <div className="App">
          <TodoList />
          <TodoForm />
        </div>
      </ChakraProvider>
    </TodoProvider>
  );
}

export default App;
