import ImageComponent from '../share/image/image'

function DetailProductComponent({ img, title, description, value, condition, sold_quantity }) {
    const sold = (sold_quantity > 0) ? ` - ${sold_quantity} vendidos` : ``;
    const locale = Intl.NumberFormat(value.currency)
    const price = locale.format(value.amount);
    return (
        <article className="content__block__product__detail">
            <section className="content__data">
                <div className="block__image">
                    <ImageComponent
                        src={img}
                        alt="logo"
                        layout="fill"
                    />
                </div>
                <div className="block__detail">
                    <h3>Descripcion de producto</h3>
                    <p>{description}</p>
                </div>
            </section>
            <section className="content__value">
                <div className="block__numberitems">
                    <span>{condition}</span>{sold}
                </div>
                <div className="block__titles">
                    <h1>{title}</h1>
                </div>
                <div className="block__value">
                    <p>{price}</p>
                </div>
                <div className="block__btn__buy">
                    <button>
                        <p>Comprar</p>
                    </button>
                </div>
            </section>
        </article>
    )
}

export default DetailProductComponent