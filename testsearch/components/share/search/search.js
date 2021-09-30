
import ImageComponent from '../../share/image/image';
import { useRouter } from 'next/router'
import React, { useState } from "react";

function SearchComponent({ msg }) {
  const router = useRouter();
  const [search, setsearch] = useState("");
  const stringSearch = 'aaaa';
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `/items?search=${e.target.search.value}`;
    console.log(url);
    router.push("/items?[search]", url);
  }

  return (
    <div className="content__search">
      <form onSubmit={handleSubmit}>
        <div className="input__search">
          <input
            id="search"
            type="text"
            placeholder={msg}
            name="search"
          />
        </div>
        <div className="btn__search">
          <button type="submit">
            <ImageComponent
              src="/assets/ic_search.png"
              alt="logo"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchComponent