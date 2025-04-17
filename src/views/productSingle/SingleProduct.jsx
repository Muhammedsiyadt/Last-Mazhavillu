import React from 'react'
import ProductSingle from './ProductSingle'
import Description from './Description'
import RelatedProducts from './RelatedProducts'

const SingleProduct = () => {
  return (
    <>
      <ProductSingle />
      <Description />
      <RelatedProducts />
    </>
  )
}

export default SingleProduct