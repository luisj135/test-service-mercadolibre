

function BreadComponent({ items }) {
  return (
    <ol className="content__bread__cumbs">
      <li className="breadcrumb__item" aria-current="page">Electronica Audio y video</li>
      <li className="breadcrumb__item" aria-current="page">iPod</li>
      <li className="breadcrumb__item" aria-current="page">Reproductores</li>
      <li className="breadcrumb__item" aria-current="page">iPod touch</li>
      <li className="breadcrumb__item active" aria-current="page">32 GB</li>
    </ol>
  )
}

export default BreadComponent