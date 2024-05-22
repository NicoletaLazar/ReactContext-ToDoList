import { Button, ButtonGroup, Input, Container, Stack } from "@chakra-ui/react";
import { useCallback, useContext, useState } from "react";
import { TodoContext } from "./ToDoContext";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);

  const handleInputChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if ("" === title || undefined === title) {
      alert("Field cannot be blank");
      return;
    }
    const newTodos = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
  };

  //   const resetTodos = (e) => {
  //     e.preventDefault();
  //     setTodos([]);
  //   };
  //   onReset={resetTodos}

  const deleteTodo = (event) => {
    event.preventDefault();
    const filteredTodo = todos.filter((item) => {
      return item.id !== todos[0].id;
    });
    setTodos(filteredTodo);
  };
  return (
    <>
      <Container maxW="container.sm" centerContent>
        <Stack spacing="24px" align="center">
          <div>
            <form onSubmit={addTodo}>
              <Input
                size="md"
                variant="filled"
                type="text"
                focusBorderColor="blue.600"
                placeholder="Enter task here"
                onChange={(e) => handleInputChange(e)}
                value={title}
              />
              <ButtonGroup
                placement="center"
                display={"flex"}
                flexWrap={"wrap"}
              >
                <Button
                  className="add-button"
                  colorScheme="linkedin"
                  variant="outline"
                  size="md"
                  border="3px"
                  borderColor="green"
                  margin={"8px"}
                  type="submit"
                >
                  Add task
                </Button>
                <Button
                  className="delete-button"
                  colorScheme="linkedin"
                  variant="outline"
                  size="md"
                  border="3px"
                  borderColor="green"
                  margin={"8px"}
                  onClick={(e) => deleteTodo(e)}
                >
                  Delete task
                </Button>
                {/* <Button
            className="delete-button"
            colorScheme="linkedin"
            variant="outline"
            size="md"
            border="3px"
            borderColor="green"
            margin={"8px"}
            type="reset"
          >
            Reset tasks
          </Button> */}
              </ButtonGroup>
            </form>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default TodoForm;
