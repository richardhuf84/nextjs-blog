import Head from 'next/head'
import Link from 'next/link';
import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <Link href="/todo">Todo list</Link>
      <Card>
        <h1>
          🚀 Next JS Fun
        </h1>
        <p>Next JS stuff... 😋</p>

      </Card>
    </main>
  )
}
