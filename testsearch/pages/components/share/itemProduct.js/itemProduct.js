import Head from 'next/head'
import ImageComponent from '../../share/image/image';

export default function ItemProduct() {
  return (
    <div className="container__item">
      <div className="container__images">
        <ImageComponent
          src="/assets/product_image.png"
          alt="product"
          width="180"
          height="180"
          loading="lazy"
          layout="fixed"
        />
      </div>
      <div className="container__properties">
        <div className="container__txt">
          <div className="block__value shipping_ico">
            <p>$1.980</p>
          </div>
          <div className="block__txt">
            <p>
              Radio Android 9 Pantalla 10 Pulgadas Wifi Gps 2 Din Cámara
            </p>
          </div>
        </div>
      </div>
      <div className="container__city">
        <p>Capital Federal</p>
      </div>
    </div>
  )
}
