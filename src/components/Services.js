import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
const Services = () => {
  return <Wrapper >
    <article className=" section-center" >
      <div className=" feature-heading  content">
        <h3>Custom Furniture <br /> Built Only For You</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis dolor quidem inventore error enim molestiae provident. Est, doloribus deserunt.</p>
      </div>
      <div className="feature-body content">
        {services.map(service => {
          const { id, icon, title, text } = service;
          return (
            <div className="feature-item" key={id}>
              <div className="feature-icon">
                {icon}
              </div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          )
        })}

      </div>
    </article>

  </Wrapper>
}
const Wrapper = styled.section`
background:var(--clr-primary-10);
p{
  color: var(--clr-primary-4);
  line-height:2;
}
h3, h4{
  color: var(--clr-primary-1);
  margin-bottom:2rem;
}
.feature-heading{
  display:grid;
  padding-top:3.5rem;
  
  @media (min-width:992px){
    grid-template-columns:1fr 1fr;
  }
}
.feature-body{
  display:grid;
  gap:2.5rem;
  padding-bottom:3rem; 
  .feature-item{
   display:grid;
   place-items:center;
  
    background:var(--clr-primary-7);
    border-radius:7px;
    padding:2.5rem 1.7rem;

    .feature-icon{
      box-sizing:border-box;
      display:grid;
      place-items:center;
      width:4rem;
      height:4rem;
      border-radius:50%;
      background-color:#fff;
     margin-bottom:1.2rem;
      color:var(--clr-primary-2);
      svg{
        font-size: 2rem;
      }
    }
    p{
      text-align:center;
    }
      }
  @media (min-width:768px){
    grid-template-columns:1fr 1fr;

  }
  @media (min-width:992px){
    grid-template-columns:1fr 1fr 1fr;
   padding:0;
   transform:translateY(5rem)  
    
  }
}
`
/*
const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`*/
export default Services
