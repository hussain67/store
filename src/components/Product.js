import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({ id, image, name, price }) => {
  return <Wrapper key={id}>
    <div className="container">
      <img src={image} alt={name} />
      <Link to={`/products/${id}`} className="link"><FaSearch /></Link>
    </div>
    <footer>
      <p className="name">{name}</p>
      <p className="price">{formatPrice(price)}</p>
    </footer>
  </Wrapper>
}

const Wrapper = styled.article`
.container{
  position:relative;
  background:black;
  img{
    display:block;
    width:100%;
    margin-bottom:1rem;
    height:225px;
    cursor:pointer;
   
    transition:opacity .5s linear;
  }
.link{
  position:absolute;
  top:50%;
  transform: translateY(-50%);
  left:50%;
  background:var(  --clr-primary-5);
  height:50px;
  width:50px;
  border-radius:50%;
  display:grid;
  place-items:center;
 opacity:0;
 transition:opacity .5s linear;
  svg{
    color:#fff;
    font-size:1.4rem;
  }
  }
}
.container:hover img{
  opacity:.7;
}
.container:hover .link{
  opacity:1;
}

footer{
  display:flex;
  justify-content:space-between;
  .name{
    text-transform:capitalize;
    letter-spacing:2px;
  }
  .price{
    color:var(--clr-primary-3)
  }
}

`

/*
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`*/
export default Product
