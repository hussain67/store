import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper className="section section-center">
    <article className="contact">
      <div className="contact-text">
        <h3>Join our newsletter and get 20% off</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error vitae nihil porro maxime ullam quisquam tenetur delectus tempore accusantium!</p>
      </div>
      <div className="contact-email">
        <form action="https://formspree.io/f/xjvpnjlq"
          method="POST">

          <input type="email" placeholder='Enter Email' name="_replyto" />
          <button>Subscribe</button>
        </form>
      </div>
    </article>

  </Wrapper>
}

const Wrapper = styled.section`
.contact{
  display:flex;
  flex-direction:column;
  form{
    display:flex;
    height:38px;
    width:95%;
    input{
          flex:3;
          border: 2px solid black;
          padding-left:20px;
          border-top-left-radius:5px;
          border-bottom-left-radius:5px;
    }
    button{
      flex:1;
      border: 2px solid black;
      border-left:none;
      border-top-right-radius:5px;
      border-bottom-right-radius:5px;
      cursor:pointer;
      letter-spacing:2px;
      background-color:var(--clr-primary-5)
    }
    button:hover{
      color:#fff;
      background-color:var(--clr-primary-3)
    }
  }

  @media (min-width:992px){
    flex-direction:row;
    gap:3rem;
    margin-top:10rem;
    .contact-text{
      flex:1;
    }
    .contact-email{
      flex:1;
      align-self:center;
     
    }
  }
  
}

`
//FORMSPREE
//https://formspree.io/f/xjvpnjlq

/*
const Wrapper = styled.section`
margin-top:5rem;
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`
*/
export default Contact
