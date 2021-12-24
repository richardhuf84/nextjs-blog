import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Button from './Button';
import TextInput from './TextInput';

export default function TodoList() {
  const [todos, updateTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const textInput = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();

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
        <li
          key={todo.id}

        >
          {todo.todo}
          <Button
            type="button"
            variant="secondary"
            onClick={e => removeTodo(todo.id, e)}
          >
            x
          </Button>

        </li>)
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