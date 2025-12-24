import React, { useEffect, useState } from 'react'
import '../../home/home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import handpointing from '../../cartPage/handpointing.png'
import './menuresults.css'


function MeatFishandSeafood() {

    const [meatcategory, setMeatcategory] = useState([]) //staples and grains


    useEffect(() => {
   axios.get('https://nediecom.onrender.com/category/meat,-fish-and-sea-food' , { withCredentials: true })
   //  axios.get('http://localhost:10000/category/meat,-fish-and-sea-food' , { withCredentials: true })
    .then(res => setMeatcategory(res.data))
    .catch(err => console.error(err))
  },[])


  return (
    <div><br/><br/>
    <div className='food-header-title'>
              <div className='foodheader-mobilespace'>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <h2 style={{marginRight:'30px'}}>Meat, Fish and Sea Food</h2>
              <img src={handpointing} alt='' style={{width:'30px', height:'20px'}}/>
              <Link to='/' style={{color:'blue', fontSize:'19px',fontStyle:'italic'}}><h4>back to shopping</h4></Link>
            </div>
            </div>
      </div>
      <div className='for-mobile'>
              <h2>Meat, Fish and Sea Food</h2>
              <div className='for-mobile-link'>
                <img src={handpointing} alt=''/>
                <Link to='/'><h4>back to home</h4></Link>
              </div>
        </div>
      <div className='flex-parent'>
      {meatcategory.map((meat) => {
        return <div key={meat._id}>
              <Link to={`/product/${meat._id}`}>
                <div className='border-class'>
                <div className='flex-child1'>
                  <div className='food-image'>
                    {/* <img src={img.image} alt="product-image" /> */}
                    <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${meat.image}`} alt="" />
                    </div>
                    <h2 className='food-titlee'>{meat.productname}</h2>
                    <h4 className='quantity'>Weight:{meat.productweight}kg</h4>
                    <div className='price-tag-both'>
                  <div className='pricetag'>
                  <h5>£{(meat.productprice ?? 0).toFixed(2)}</h5>
                  </div>
                  <div className='former-price'>
                  <h2 style={{fontWeight:'480'}}>£{meat.productoldprice}</h2>
                  </div>
                  </div>
                  <div>
                  <button className='add-to-cart-btnz'>Add to Cart</button><br/>
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

export default MeatFishandSeafood
