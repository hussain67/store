import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return <Wrapper>
    <article className=" section section-center">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="featured-products">
        {featured.slice(0, 3).map(product => {
          return <Product {...product} />
        })}
      </div>
    </article>
    <Link to='/products' className="btn">all products</Link>
  </Wrapper>
}
const Wrapper = styled.section`
background-color: var(--clr-grey-10);
.title{
  margin-bottom:4rem;
}
.featured-products{
  display:grid;
  gap: 2rem;
  @media (min-width:576px){
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
  }
`

/*
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
*/
export default FeaturedProducts
