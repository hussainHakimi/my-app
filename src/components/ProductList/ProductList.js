import './ProductList.css'
import Product from '../Product/Product'

const ProductList = ({products, onDelete}) => {
  return (
    <div className='product-list'>
      {products.map((item) => {
        return <Product product={item} key={item.id} onDelete={onDelete}/>
      })}
    </div>
  )
}


export default ProductList