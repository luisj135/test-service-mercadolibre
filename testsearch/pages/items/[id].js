import Head from 'next/head'
import BreadComponent from '../../components/list/breadCumbs/breadCumbs'
import DetailProductComponent from '../../components/detail/detailProduct'
import HeaderComponent from '../../components/share/header/header'

export default function DetailProduct(props) {
  const {item} = props;
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
            <DetailProductComponent
              img={item.picture}
              title={item.title}
              description={item.description}
              value={item.price}
              condition={item.condition}
              sold_quantity={item.sold_quantity}
            />
          </section>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params

  const apiResponse = await fetch(`http://localhost:5000/api/items?id=${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }

  if (res) {
    res.writeHead(301, { Location: "/" }).end();
  }
}
