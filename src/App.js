import {useState} from 'react'
// import Product from './components/Product/Product'
import ProductList from './components/ProductList/ProductList'

const App = ()  => {

  const [products, setProducts] = useState(      // two parameters of this function is 1-currentState and 2-function that update state.
    [
      {id : '1', title : "Title 1"},
      {id :'2', title : "Title 2"},
      {id :'3', title : "Title 3"}
    ])
  return(
    <div className="container" >
      <ProductList products={products}/>
    </div>
  )
}

export default App

