import React from 'react'
import Product from './Product'

function Json() {
    const products = [
        {
            pid:1,
            pname:'Kitkat',
            weight:'50gm',
            pprice:'30 Rs'
        },
        {
            pid:2,
            pname:'Horlex',
            weight:'250gm',
            pprice:'120 Rs'
        }
    ]
    const productList = products.map(product =><Product key={[product.pid]} product={product}/>)
  return (
    <div>
        {productList}
    </div>
  )
}

export default Json