import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()
  if (products.length < 0) {
    return <div>Your product page is empty</div>
  }
  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products}>
    products
  </GridView>
}

export default ProductList
