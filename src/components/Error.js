import React from 'react'
import styled from 'styled-components'
const Error = () => {
  return <div className="section section-center text-center">
    <Message>There was an Error....</Message>

  </div>

}

const Message = styled.h2`
color:red
`



export default Error
