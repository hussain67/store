import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount: amount, shipping_fee: fee } = useCartContext()

  return <Wrapper>
    <div>
      <article>
        <h4>
          Subtotal: <span>{formatPrice(amount)}</span>
        </h4>
        <p>
          Shipping Fee: <span>{formatPrice(fee)}</span>
        </p>
        <hr />
        <h3>
          Order Total <span>{formatPrice(amount + fee)} </span>
        </h3>
      </article>
      <button type='button' className="btn">Log On</button>
    </div>
  </Wrapper>

}

const Wrapper = styled.section`
margin-top:3rem;
display:flex;
justify-content:center;
article{
  padding:2rem 3rem;
  border: 1px solid silver;
h4{
  font-weight:600;
  font-size:1.2rem;
}
h3{
  margin-top: 2rem;
  font-weight:700;
  font-size:1.5rem;
}
  h4, p, h3{
    display:grid;
    grid-template-columns: 200px 1fr;
  }
}
.btn{
  width:100%;
  margin-top:1rem;
}
@media (min-width:772px){justify-content: end;

}
`
/*
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`*/

export default CartTotals
