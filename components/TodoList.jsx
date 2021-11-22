import { useState, useRef } from 'react';
import styles from '../styles.module.css';
import { v4 as uuid } from 'uuid';

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
          className={styles.todo}
          key={todo.id}

        >
          {todo.todo}
          <button
            type="button"
            onClick={e => removeTodo(todo.id, e)}
            className={styles.button}
          >
            x
          </button>

        </li>)
      :
      'No todo\'s yet..';


  return (
    <form method="post" onSubmit={e => handleSubmit(e)}>
      <div className={styles.todoInput}>
        <input
          type="text"
          placeholder="Add a todo"
          className={styles.input}
          value={newTodo}
          ref={textInput}
          onChange={e => setNewTodo(e.currentTarget.value)}
        />

        <input
          type="submit"
          value="Add"
          className={styles.button}
        />
      </div>

      <ul className={styles.todoList}>
        {renderTodos(todos)}
      </ul>
    </form>
  )
}