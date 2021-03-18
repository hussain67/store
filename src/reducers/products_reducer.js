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

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.value.filter(item => {
      return item.featured === true;
    })
    return {
      ...state, products_loading: false, products: action.value, featured_products: featuredProducts
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {

    return { ...state, products_loading: false, products_error: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, single_product_loading: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, single_product_loading: false, single_product: action.value }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, single_product_loading: false, single_product_error: true }
  }
  return state;
  throw new Error(`No mattiching action type ${action.type}`)
}
/*
const products_reducer = (state, action) => {
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}
*/
export default products_reducer
