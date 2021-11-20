import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="Heading">
        Next JS Fun 🚀

      </h1>
      <Link href="/todo">Todo list</Link>
    </>
  )
}
