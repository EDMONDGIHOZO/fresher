import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresher App</title>
        <meta name="description" content="fresher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
