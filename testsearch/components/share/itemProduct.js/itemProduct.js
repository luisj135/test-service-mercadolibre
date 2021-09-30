import Head from 'next/head'
import ImageComponent from '../image/image';

export default function ItemProduct({img, title, value, state, freeShipping=false}) {
  const showIco = (freeShipping) ? 'shipping_ico' : '';
  const locale = Intl.NumberFormat(value.currency)
  const price = locale.format(value.amount);
  return (
    <div className="container__item">
      <div className="container__images">
        <ImageComponent
          src={img}
          alt="product"
          width="180"
          height="180"
          loading="lazy"
          layout="fixed"
        />
      </div>
      <div className="container__properties">
        <div className="container__txt">
          <div className={`block__value ${showIco}`}>
            <p>{price}</p>
          </div>
          <div className="block__txt">
            <p>
              {title}
            </p>
          </div>
        </div>
      </div>
      <div className="container__city">
        <p>{state}</p>
      </div>
    </div>
  )
}
