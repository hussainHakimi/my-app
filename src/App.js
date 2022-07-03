import {useState} from 'react'
import AddProduct from './components/AddProduct/AddProduct'
// import Product from './components/Product/Product'
import ProductList from './components/ProductList/ProductList'

const App = ()  => {

  const [products, setProducts] = useState([])
    const addProduct = (title) => {
      const id = Math.floor(Math.random() * 10000);
      const newProduct = {id , ...title}

      setProducts([...products, newProduct]);
    }
    const deleteProduct = (id) => {
      setProducts(products.filter((item) => item.id !== id))
    }
  return(
    <div className="container" >
      <AddProduct onAdd={addProduct}/>
      <ProductList products={products} onDelete={deleteProduct}/>
    </div>
  )
}

export default App

