import React, { useEffect, useState } from 'react'
import '../../home/home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import handpointing from '../../cartPage/handpointing.png'
import './menuresults.css'


function StaplesandGrains() {

  const [staplescategory, setStaplescategory] = useState([]) //staples and grains


  useEffect(() => {
    axios.get('https://nediecom.onrender.com/category/staples-and-grains', { withCredentials: true })
      // axios.get('http://localhost:10000/category/staples-and-grains' , { withCredentials: true })
      .then(res => setStaplescategory(res.data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div><br /><br />
      <div className='food-header-title'>
        <div className='foodheader-mobilespace'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ marginRight: '30px' }}>Staples and Grains</h2>
            <img src={handpointing} alt='' style={{ width: '30px', height: '20px' }} />
            <Link to='/' style={{ color: 'blue', fontSize: '19px', fontStyle: 'italic' }}><h4>back to shopping</h4></Link>
          </div>
        </div>
      </div>
      <div className='for-mobile'>
        <h2>Staples and Grains</h2>
        <div className='for-mobile-link'>
          <img src={handpointing} alt='' />
          <Link to='/'><h4>back to home</h4></Link>
        </div>
      </div>
      <div className='flex-parent'>
        {staplescategory.map((staples) => {
          return <div key={staples._id}>
            <Link to={`/product/${staples._id}`}>
              <div className='border-class'>
                <div className='flex-child1'>
                  <div className='food-image'>
                    {/* <img src={img.image} alt="product-image" /> */}
                    <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${staples.image}`} alt="" />
                  </div>
                  <h2 className='food-titlee'>{staples.productname}</h2>
                  <h4 className='quantity'>Weight:{staples.productweight}kg</h4>
                  <div className='price-tag-both'>
                    <div className='pricetag'>
                      <h5>£{(staples.productprice ?? 0).toFixed(2)}</h5>
                    </div>
                    <div className='former-price'>
                      <h2 style={{ fontWeight: '480' }}>£{staples.productoldprice}</h2>
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

export default StaplesandGrains
