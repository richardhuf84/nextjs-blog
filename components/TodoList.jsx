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

  const renderTodos = todos =>
    todos.length ?
      todos.map(todo =>
        <li
          className="todo"
          key={todo.id}
        >
          {todo.todo}
        </li>)
      :
      'No todo\'s yet..';


  return (
    <form method="post" onSubmit={e => handleSubmit(e)}>
      <div className={styles.flex}>
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

      <ul className="todos">
        {renderTodos(todos)}
      </ul>
    </form>
  )
}