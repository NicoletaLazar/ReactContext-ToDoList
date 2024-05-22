import React from "react";
import { Stack, HStack, Checkbox, Button, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { TodoContext } from "./ToDoContext";

const TodoItem = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  useEffect(() => {
    // console.log(props);
  }, [todos]);

  const completeTodo = (id) => {
    const filterTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    console.log(id);
    setTodos(filterTodos);
  };

  const deleteTodo = (id) => {
    console.log("DELETE!");
    const filteredTodo = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(filteredTodo);
  };

  console.log(props);
  return (
    <Stack spacing="24px" align="center">
      <HStack>
        <Checkbox
          size="md"
          colorScheme="purple"
          iconColor="blue"
          iconSize="2rem"
          iconborder="0.5px"
          borderColor="black"
          isChecked={props.todo.completed}
          onChange={() => completeTodo(props.todo.id)}
        ></Checkbox>
        <Text fontSize="md">{props.todo.id + ". " + props.todo.title}</Text>
        <Button
          colorScheme="teal"
          variant="ghost"
          size="xs"
          border="2px"
          borderColor="green.500"
          onClick={() => deleteTodo(props.todo.id)}
        >
          Delete
        </Button>
      </HStack>
    </Stack>
  );
};

export default TodoItem;
