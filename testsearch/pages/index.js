import Head from 'next/head'
import HeaderComponent from '../components/share/header/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TestSearch</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header className="container header">
        <HeaderComponent />
      </header>
      <main className="container__data">
      </main>
    </div>
  )
}
