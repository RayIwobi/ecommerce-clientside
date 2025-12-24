import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



function toTitleCaseFromKebab(str) {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}


function CategoryPage() {
    const { CategoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
       //  axios.get(`http://localhost:10000/category/${CategoryName}` , { withCredentials: true })
       axios.get(`https://nediecom.onrender.com/category/${CategoryName}` , { withCredentials: true })
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }, [CategoryName]
)

  return (
    <div>
        <h2>{toTitleCaseFromKebab(CategoryName)}</h2>
        <div>
            {products.length === 0 ? (
                <p>No products found.</p>
            ):(
                products.map((prod) => (
                    <div key={prod._id}>
                        <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${prod.image}` }
                        alt="product"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}/>
                    
                    <h4>{prod.productname}</h4>
                    <h4>{prod.productquantity}</h4>
                    <h4>{prod.productprice}</h4>
                    <h4>{prod.productoldprice}</h4>
                    <h4>{prod.price}</h4>
                    </div>
                ))
            )}
        </div>
      
    </div>
  )
}

export default CategoryPage
