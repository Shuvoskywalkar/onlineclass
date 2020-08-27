import React, { useState } from 'react';
import fakedata from '../../fakeData/Fakedata'
import './List.css'
import Product from '../Courses/Courses'
import Cart from './cart/cart'
const List = () => {
    // console.log(fakedata)  
    const super14=fakedata.slice(0,14)
    const [Courses,setproduct]=useState(super14)
    const[cart,setcart]=useState([])
    const HandleAddProduct=(someTHing)=>{console.log(someTHing);
        const newcart=[...cart,someTHing]
      setcart(newcart) }
    return (
        <div className="shopContainer">
            <div className="productContainer">
            
            
    {Courses.map(pro=>
    <Product clickHandle={HandleAddProduct} 

    product={pro}>

    </Product>)}
        
            </div>
            <div className="cartContainer">
    
    <Cart Cart={cart}></Cart>
            </div>
        </div>
    );
};

export default List;