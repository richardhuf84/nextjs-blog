import Head from 'next/head'
import Link from 'next/link';
import Card from '../components/Card';
import Box from '../components/Box';

export default function Home() {
  return (
    <Box as="main" p={4} fontFamily="" bg="secondary" border={2} borderColor="black">
      <Link href="/todo">Todo list</Link>
      <Card>
        <h1>
          🚀 Next JS Fun
        </h1>
        <p>Next JS stuff... 😋</p>

      </Card>
    </Box>
  )
}
