
import ImageComponent from '../../share/image/image';

function SearchComponent({ msg }) {
  return (
    <div className="content__search">
      <div className="input__search">
        <input
          type="text"
          placeholder={msg}
        />
      </div>
      <div className="btn__search">
        <ImageComponent
          src="/assets/ic_search.png"
          alt="logo"
        />
      </div>
    </div>
  )
}

export default SearchComponent