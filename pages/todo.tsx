import Link from 'next/link';
import TodoList from '../components/TodoList';

export default function Todo() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1 className="heading">🗒️ A todo list in next</h1>

      <TodoList />

    </div>
  )
}