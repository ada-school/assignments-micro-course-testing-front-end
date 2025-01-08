import { Center } from "@chakra-ui/react";
import { FormTodo } from "../components/FormTodo";
import { ListTodos } from "../components/ListTodos";
import { useState } from "react";

const TodoList = () => {
  const [listTodos, setListTodos] = useState([]);

  const addTodo = (todo) => {
    setListTodos((prev) => [...prev, todo]);
  };

  const updateTodo = (index) => {
    const todos = [...listTodos];
    todos[index].isComplete = !todos[index].isComplete;
    setListTodos([...todos]);
  };
  return (
    <div>
      <Center flexDir="column" gap={5}>
        <FormTodo handleList={addTodo} />
        <ListTodos listTodos={listTodos} updateTodo={updateTodo} />
      </Center>
    </div>
  );
};

export default TodoList;
