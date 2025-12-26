import React, { useEffect, useState } from 'react'
import '../../home/home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import handpointing from '../../cartPage/handpointing.png'
import './menuresults.css'


function DairyandBeverages() {

  const [dairycategory, setDairycategory] = useState([]) //staples and grains


  useEffect(() => {
    axios.get('https://nediecom.onrender.com/category/dairy-and-beverages', { withCredentials: true })
      // axios.get('http://localhost:10000/category/dairy-and-beverages' , { withCredentials: true })
      .then(res => setDairycategory(res.data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div><br /><br />

      <div className='food-header-title'>
        <div className='foodheader-mobilespace'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ marginRight: '30px' }}>Dairy and Beverages</h2>
            <img src={handpointing} alt='' style={{ width: '30px', height: '20px' }} />
            <Link to='/' style={{ color: 'blue', fontSize: '19px', fontStyle: 'italic' }}><h4>back to shopping</h4></Link>
          </div>
        </div>
      </div>
      <div className='for-mobile'>
        <h2>Dairy and Beverages</h2>
        <div className='for-mobile-link'>
          <img src={handpointing} alt='' />
          <Link to='/'><h4>back to home</h4></Link>
        </div>
      </div>

      <div className='flex-parent'>
        {dairycategory.map((dairy) => {
          return <div key={dairy._id}>
            <Link to={`/product/${dairy._id}`}>
              <div className='border-class'>
                <div className='flex-child1'>
                  <div className='food-image'>
                    {/* <img src={img.image} alt="product-image" /> */}
                    <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${dairy.image}`} alt="" />
                  </div>
                  <h2 className='food-titlee'>{dairy.productname}</h2>
                  <h4 className='quantity'>Weight:{dairy.productweight}kg</h4>
                  <div className='price-tag-both'>
                    <div className='pricetag'>
                      <h5>£{(dairy.productprice ?? 0).toFixed(2)}</h5>
                    </div>
                    <div className='former-price'>
                      <h2 style={{ fontWeight: '480' }}>£{dairy.productoldprice}</h2>
                    </div>
                  </div>
                  <div>
                    <button className='add-to-cart-btnz'>Add to Cart</button><br />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default DairyandBeverages
