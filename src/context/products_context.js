import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
//import { FaSmile } from 'react-icons/fa'

const ProductsContext = React.createContext()


export const ProductsProvider = ({ children }) => {

  const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {}
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  function closeSidebar() {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  function openSidebar() {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(url)
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, value: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, })
    }
  }
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const response = await axios.get(url)
      const product = response.data;
      console.log(product)
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, value: product })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }

  }

  useEffect(() => {
    fetchProducts(url)
  }, [])
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
/*

const initialState = {}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value='products context'>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
*/