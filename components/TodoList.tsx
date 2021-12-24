import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Button from './Button';
import Box from './Box';
import TextInput from './TextInput';

export default function TodoList() {
  const [todos, updateTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const textInput = useRef(null);

  const handleSubmit = function (event) {
    event.preventDefault();

    updateTodos(
      todos => [
        ...todos,
        {
          todo: newTodo,
          id: uuid()
        }
      ]
    );

    // reset input
    setNewTodo(newTodo => '');

  }

  const removeTodo = function (todoId, e) {
    e.preventDefault();

    updateTodos(todos => todos.filter(todo => todo.id !== todoId));
  }

  const renderTodos = todos =>
    todos.length ?
      todos.map(todo =>
        <Box
          as="li"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
          width="50vw"
          key={todo.id}

        >
          {todo.todo}
          <Button
            type="button"
            variant="primary"
            ml={2}
            onClick={e => removeTodo(todo.id, e)}

          >
            x
          </Button>

        </Box>)
      :
      'No todo\'s yet..';


  return (
    <form method="post" onSubmit={e => handleSubmit(e)}>
      <TextInput
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        ref={textInput}
        onChange={e => setNewTodo(e.currentTarget.value)}
        mr={2}
      />

      <Button
        type="submit"
        variant="primary"
      >
        Add
      </Button>

      <ul
      >
        {renderTodos(todos)}
      </ul>
    </form>
  )
}