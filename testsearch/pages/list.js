import Head from 'next/head'
import HeaderComponent from './components/share/header/header'
import ItemProduct from './components/share/itemProduct.js/itemProduct'
import BreadComponent from './components/list/breadCumbs/breadCumbs'

export default function ListProduct() {
  return (
    <div>
      <Head>
          <title>List Items</title>
          <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header className="container header">
        <HeaderComponent />
      </header>
      <main className="container">
        <section className="container__data">
          <section className="container__bread__crumbs">
            <BreadComponent />
          </section>
          <section className="container__list_items">
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
          </section>
        </section>
      </main>
    </div>
  )
}
