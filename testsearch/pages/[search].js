import Head from 'next/head'
import HeaderComponent from '../components/share/header/header'
import ItemProduct from '../components/share/itemProduct.js/itemProduct'
import BreadComponent from '../components/list/breadCumbs/breadCumbs'
import { useRouter } from 'next/router'

export default function ListProduct(props) {
  const router = useRouter();
  const onClickDetail = (value) => {
    const url = `/items/${value}`;
    router.push("/items/[id]", url);
  }
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
            <BreadComponent items={props.categoryPath}/>
          </section>
          <section className="container__list_items">
              {
                props.items &&
                props.items.map((item, key)=>
                  <a key={key} onClick={(e)=>onClickDetail(item.id)}>
                    <ItemProduct
                      title={item.title}
                      img={item.picture}
                      value={item.price}
                      state={item.state}
                      freeShipping={item.free_shipping}
                      />
                  </a>
                )
              }
          </section>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params, res} = context;
  const { search } = params

  const apiResponse = await fetch(`http://nodeserver:5000/api/items?q=${search}`);
  if (apiResponse.ok){
    const props = await apiResponse.json();
    return { props };
  }

  if (res) {
    res.writeHead(301, { Location: "/"}).end();
  }
}
