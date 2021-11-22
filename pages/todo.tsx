import Link from 'next/link';
import styles from '../styles.module.css';
import TodoList from '../components/TodoList';


export default function Todo() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1 className={styles.heading}>🗒️ A todo list in next</h1>

      <TodoList />

    </div>
  )
}