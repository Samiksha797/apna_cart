import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js'
//import Footer from './components/Footer';
import React, {useState} from 'react';

function App() {

  const products = [
    {
      price: 99999,
      name: "Iphone 105 Max",
      quantity: 0,
    },
    {
      price: 99999,
      name: "Redmi 105 Max",
      quantity: 0,
    }
  ]

  let [productDetail, setProductList] = useState(products)

  const incrementQuantity = (index) => {
    
    let newProductList = [...productDetail];
    
    newProductList[index].quantity++;
   
    setProductList(newProductList);
   
  }


  return (
   <> 
     <Navbar/>
     <main className='container mt=5'>
     <ProductList productList={products} incrementQuantity={incrementQuantity} p={productDetail}/>
     </main>
     
   </>
  );
}

export default App;
