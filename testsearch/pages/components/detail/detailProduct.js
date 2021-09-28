import ImageComponent from '../share/image/image'

function DetailProductComponent({ dataProduct }) {
    return (
        <article className="content__block__product__detail">
            <section className="content__data">
                <div className="block__image">
                    <ImageComponent
                        src="/assets/product_detail.png"
                        alt="logo"
                    />
                </div>
                <div className="block__detail">
                    <h3>Descripcion de producto</h3>
                    <p>Chuck Norris is ambidextrous. He can do Roundhouse kicks with his left and right leg. ALL AT THE SAME TIME Outer space exists because it's afraid to be on the same planet with Chuck Norris, Chuck Norris can win a game of Connect Four in only three moves A Handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there. Chuck Norris once heard that nothing could kill him. So he tracked down nothing and killed it first Chuck Norris uses pepper spray to spice up his steaks The leading causes of death in the United States are: 1. Heart Disease 2. Chuck Norris 3. Cancer Chuck Norris taught Regan MacNeil how to turn her head 360 degrees, Chuck Norris is my Homeboy. Most people have 23 pairs of chromosomes. Chuck Norris has 72... and they're all poisonous The only thing fear has to fear is Chuck Norris itself The only way to make diamond powder is to rub the diamond on Chuck Norris's skin.</p>
                </div>
            </section>
            <section className="content__value">
                <div className="block__numberitems">
                    <span>Nuevo</span> - 234 vendidos
                </div>
                <div className="block__titles">
                    <h1>Deco Reverse Sombrero Oxford</h1>
                </div>
                <div className="block__value">
                    <p>1.980</p>
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