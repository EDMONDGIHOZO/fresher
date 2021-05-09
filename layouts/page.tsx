import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '@components/Header'
import Navigation from '@components/navigation'
import Footer from '@components/Footer'

type MetaProps = {
  title: string
  description: string
}

type PageProps = {
  meta: MetaProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <Head>
      <title> {meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
    </Head>

    <main>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </main>
  </>
)

export default Page
