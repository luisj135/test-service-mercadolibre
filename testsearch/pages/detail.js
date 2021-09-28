import Head from 'next/head'
import BreadComponent from './components/list/breadCumbs/breadCumbs'
import DetailProductComponent from './components/detail/detailProduct'
import HeaderComponent from './components/share/header/header'

export default function DetailProduct() {
  return (
    <div>
      <Head>
          <title>List Items</title>
          <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header className="container header">
            <HeaderComponent/>
      </header>
      <main className="container">
        <section className="container__data">
          <section className="container__bread__crumbs">
            <BreadComponent />
          </section>
          <section className="container__list_items">
            <DetailProductComponent />
          </section>
        </section>
      </main>
    </div>
  )
}
