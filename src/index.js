import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-e29c2tsn.us.auth0.com
//XZkBj6pFhN3VpFX5NEWxySYwX5HyAOTW15zZ-R9UfE1iuysXPKaK199XXfNOcAIs
ReactDOM.render(



  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>

  , document.getElementById('root'))
