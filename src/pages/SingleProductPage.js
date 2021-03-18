import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'


const SingleProductPage = () => {
  const { single_product_loading: loading, single_product_error: error, fetchSingleProduct, single_product: product } = useProductsContext()
  const { id } = useParams()
  const urlsp = `${url}${id}`
  const { colors = ["#ffb900"] } = product;

  useEffect(() => {
    fetchSingleProduct(urlsp)
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return <Wrapper>
    <PageHero title={` ${product.name}`} product={product} />
    <section className="product-center section-center">
      <ProductImages images={product.images} />
      <article className="info">
        <h2>  {product.name}</h2>
        <Stars stars={product.stars} reviews={product.reviews} />
        <h4>{formatPrice(product.price)}</h4>
        <p>{product.description}</p>
        <p><span>Available: </span>  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        <p><span>SKU:</span> {product.id}</p>
        <p><span>Brand: </span> {product.company}</p>
        {product.stock && <AddToCart product={product} />}
      </article>
    </section>
  </Wrapper>
}
const Wrapper = styled.main`
.product-center{
 display:grid;
 gap:4rem;
 margin-top:2rem;
}
@media (min-width:992px){
  .product-center{
    
    grid-template-columns: 1fr 1fr;
  }
}
`
/*
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
*/
export default SingleProductPage
