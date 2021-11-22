import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles.module.css';

export default function Home() {
  return (
    <main>
      <Link href="/todo">Todo list</Link>
      <h1 className={styles.heading}>
        🚀 Next JS Fun

      </h1>
    </main>
  )
}
