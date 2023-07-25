import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products,setProducts]=useState([]);
    const [count,setCount]=useState(0);
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(10);
    const pages=Math.ceil(count/size);
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data?.products)
            setCount(data?.count)
        })
    },[page,size])
    return (
        <div>
        
            <div className='grid lg:grid-cols-3 gap-4'>
              
{
    products.map(product=><Product
     key={product._id} 
     product={product}
     ></Product>)
}
         
        </div>
        <div className='text-center'>
<p>Currently selected page {page+1} and size {size}</p>
{
[...Array(pages).keys()].map(number=><button 
    className=' border-2 mr-4 w-16 m-4'
         key={number}
         onClick={()=>setPage(number)}
         >{number+1}
         </button>)
}
<select onClick={event=>setSize(event.target.value)}>
    <option value="5">5</option>
    <option value="10" selected>10</option>
    <option value="15">15</option>
    <option value="20">20</option>
    
</select>
</div>
        </div>
    );
};

export default Home;