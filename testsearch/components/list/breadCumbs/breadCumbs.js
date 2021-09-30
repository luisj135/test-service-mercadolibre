

function BreadComponent({ items }) {
  return (
    <ol className="content__bread__cumbs">
      {
        items &&
        items.map((item, key) =>
          <li key={key} className="breadcrumb__item" aria-current="page">{item}</li>
        )
      }
    </ol>
  )
}

export default BreadComponent