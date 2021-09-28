import ImageComponent from '../image/image'
import SearchComponent from '../search/search'

function HeaderComponent() {
    return (
        <section className="container__elements">
            <div className="brand_logo">
                <ImageComponent
                    src="/assets/logo_ml.png"
                    alt="logo"
                />
            </div>
            <div className="search_items">
                <SearchComponent msg="Nunca dejes de buscar" />
            </div>
        </section>
    )
}

export default HeaderComponent