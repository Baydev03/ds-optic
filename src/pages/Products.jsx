import ProductsHeader from '../components/partials/ProductsHeader';
import ProductsList from '../components/lists/ProductsList';
import React from 'react';

const Products = () => {
  const [toggleFolders, setToggleFolders] = React.useState(true)

  const togglers = {
    toggleFolders,
    setToggleFolders,
  }

  return (
    <>
      <ProductsHeader {...togglers}/>
      <ProductsList {...togglers}/>
    </>
  )
}

export default Products