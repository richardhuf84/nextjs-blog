import { useState, useRef } from 'react';
import styles from '../styles.module.css';
import { v4 as uuid } from 'uuid';

export default function TodoList() {
  const [todos, updateTodos] = useState([]);

  const textInput = useRef(null);

  const handleSubmit = function (e) {
    console.log('e', e);
    e.preventDefault();


    updateTodos(
      todos => [
        ...todos,
        {
          todo: e.target[0].value,
          id: uuid()
        }
      ]
    );

    textInput.current.value = null;
  }

  const renderTodos = todos => todos.length ?
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
      <input
        type="text"
        placeholder="Add a todo"
        className={styles.input}
        ref={textInput}
      />

      <input
        type="submit"
        value="Add"
        className={styles.button}
      />

      <ul className="todos">
        {renderTodos(todos)}
      </ul>
    </form>
  )
}