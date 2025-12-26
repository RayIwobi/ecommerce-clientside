import React, { useState, useEffect, useContext } from 'react'
import './product.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import { CartContext } from '../CartReduxEngine/ContextProvider'
import handpointing from '../cartPage/handpointing.png'


//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ProductPage() {
  const { dispatch } = useContext(CartContext)//for cart from yousaf

  const [items, setItems] = useState([])
  // const navigate = useNavigate()

  const [product, setProduct] = useState('')
  const [visiblecount, setVisiblecount] = useState(24) //limits the number of items displayed and controls the loadmore button


  const [showgotocartbtn, setShowgotocartbtn] = useState(() => { //the goto cart button appears only when add to cart is activated
    return sessionStorage.getItem('showgotocartbtn') === 'true'
  });

  const { _id } = useParams()

  //  useEffect(() => {
  //     axios.get('http://localhost:10000/auth/verify' ,{ withCredentials: true })
  //     //axios.get('https://nediecom.onrender.com/auth/verify')
  //     .then((res) => {
  //         if(res.data.status){

  //         }
  //         else{
  //             navigate('/login')
  //         }
  //     })
  // }, [navigate])

  useEffect(() => {
    axios.get('https://nediecom.onrender.com/getitems')
      //axios.get('http://localhost:10000/getitems')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])


  useEffect(() => {
    axios.get('https://nediecom.onrender.com/product/' + _id)
      //    axios.get('http://localhost:10000/product/'+_id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
  }, [_id])



  const handleCart = () => { //for cart from yousaf
    setShowgotocartbtn(true) //for go to cart btn
    sessionStorage.setItem('showgotocartbtn', 'true') //to store the goto cart btn
    dispatch({ type: "Add", product: product })
    toast.success('Item added to cart')
  }

  //increasing / decreasing quantity of items 
  //   const increase = (_id) => {
  //   const Index = cart.findIndex(p => p._id === _id)
  //   if (Index !== -1 && cart[Index].productquantity < 10) {
  //   dispatch({ type: "Increase", _id });
  // }
  // }

  // const decrease = (_id) => {
  //   const Index = cart.findIndex(p => p._id === _id)
  //   if (Index !== -1 && cart[Index].productquantity > 1) {
  //   dispatch({ type: "Decrease", _id });
  // }
  // }


  return (
    <div className='conni1'>
      <ToastContainer position="top-right" autoClose={3000} className='mobile-color' />
      <hr className='horizontal-rule' />
      <div className='main-productcontent'>
        <div className='inner-productcontent'>
          <div className='product-image'>
            <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${product.image}`} alt="" id='productImg' />
          </div>
          <div className='product-description'>
            <h3 className='product-title'>{product.productname}</h3>
            <h5 className='quantity'>Weight: {product.productweight}{product.weight}</h5>
            <h5 className='quantity'>Quantity: {product.productquantity}</h5>
            <h5 >{'(increase quantity in cart)'}</h5>
            <Link to=''><h4 className='product-category'>Category: {product.category}</h4></Link>
            <div className='product-price'>
              <h3>£{(product.productprice ?? 0).toFixed(2)}</h3>
              <h5>£{product.productoldprice}</h5>
            </div>

            <button className='add-to-cartButton'
              onClick={handleCart} style={{ fontFamily: 'Libre Baskerville' }}>Add to cart</button>

            {showgotocartbtn &&
              (<Link to='/cart'><button className='add-to-cartButton' style={{ fontFamily: 'Libre Baskerville' }}>
                Go to Cart</button></Link>)}

            <Link to='/'><h4 style={{ fontFamily: 'Libre Baskerville', fontWeight: '400', color: 'blue', fontSize: '17px' }}><img src={handpointing} alt='' id='handpointing' /> Continue shopping</h4></Link>
            <br />

            <div className='product-details' style={{ fontFamily: 'Libre Baskerville' }}>
              <h3 style={{ fontSize: '20px' }}>Product Description</h3>
              <p style={{ fontFamily: 'Poppins' }}>
                {product.description}
              </p>
            </div>
          </div>
        </div>
        {/* <div className='customer-comments'>
        <hr/>
        <h3>Customer Reviews</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum."
                </p>
                <br/>
                <br/>
                <h3>Customer Reviews</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum."
                </p>
              
      </div> */}

        <h2 className='buymore-title' id='otherproducts'>Some items you might like</h2>
        {/* <h4 >Some items you might like</h4> */}
        <div className='top-banner-section1' >
          <div className='flex-parent' >
            {/* -------------------------------------------------------- */}
            {items.slice(0, visiblecount).map((p) => {
              return <div key={p._id} id='top-banner-product-section'>
                <Link to={`/product/${p._id}`} id='inner-position'>
                  <div className='border-class' id='borderclass-mobile'>
                    <div className='flex-child1'>
                      <div className='food-image-product'>
                        {/* <img src={img.image} alt="product-image" /> */}
                        <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${p.image}`} alt="" />
                      </div>
                      <h2 className='food-titlee' id='foodtitle'>{p.productname}</h2>
                      <h4 className='quantity'>Weight:{p.productweight}{p.weight}</h4>
                      <div className='price-tag-both'>
                        <div className='pricetag'>
                          <h5>£{(p.productprice ?? 0).toFixed(2)}</h5>
                        </div>
                        <div className='former-price'>
                          <h2 style={{ fontWeight: '480' }}>£{p.productoldprice}</h2>
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
          <div className='loadmore-btn'>
            {visiblecount < product.length && (
              <button onClick={() => setVisiblecount(visiblecount + 10)}>Load more</button>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage
//the new product page
