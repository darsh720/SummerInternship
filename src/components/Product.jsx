function Product(product) {
  return (
    <div>
        <h1>{product.product.pid},{product.product.weight},{product.product.pprice}</h1>
    </div>
  )
}

export default Product