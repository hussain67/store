import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return <Wrapper className="page-100">
    <div>
      <h2>Error 404</h2>
      <h3>Page could not be Found</h3>
      <Link to="/"><h5>Back to Home Page</h5></Link>
    </div>

  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
