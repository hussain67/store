import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const ListView = ({ products }) => {
  console.log(products)

  return <Wrapper>

    {products.map(product => {
      const { id, name, price, description, image } = product

      return <article key={id}>
        <img src={image} alt="Product" />
        <div>
          <h4>{name}</h4>
          <p className="price">{formatPrice(price)}</p>
          <p>{description.substring(0, 150)}. . .</p>
          <Link className="btn" to={`/products/${id}`}>Details</Link>
        </div>
      </article>
    })}
  </Wrapper>
}
const Wrapper = styled.section`
display:grid;
  gap:3rem;
img{
  width:300px;
  height:200px;
  display:block;
  object-fit:cover;
  border-radius:5px;
  margin-bottom:1rem;
}
.price{
  color:var(--clr-primary-6);
  margin-bottom:.75rem;
}
@media (min-width:992px){
  
  article{
    display:grid;
    column-gap:3rem;
    align-items:center;
    grid-template-columns: auto 1fr;
  }
 
}
`
/*
const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`
*/
export default ListView
