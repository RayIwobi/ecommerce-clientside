import React, { useContext} from 'react'
import './cartpage.css'
import { CartContext } from '../CartReduxEngine/ContextProvider'
import { totalItem, totalPrice } from '../CartReduxEngine/CartReducer'
import { Link, useNavigate } from 'react-router-dom'
import handpointing from './handpointing.png'
import cartimg from '../home/assets/cart.png'
import axios from 'axios'
//import { loadStripe } from '@stripe/stripe-js';


//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { useState } from 'react'


function CartPage({product}) {
  const {cart, dispatch} = useContext(CartContext)
  const [currentUser, setCurrentUser] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('home');

  const navigate = useNavigate()

  //const DELIVERY_FEE = 4;
  const DELIVERY_FEE = deliveryMethod === 'home' ? 4 : 0;

  const increase = (_id) => {
    const Index = cart.findIndex(p => p._id === _id)
    if(cart[Index].productquantity < 10){
      dispatch({type: "Increase", _id})
    }
  }

  const decrease = (_id) => {
    const Index = cart.findIndex(p => p._id === _id)
    if(cart[Index].productquantity > 1){
      dispatch({type: "Decrease", _id})
    }
  }

  const Remove = (_id) => {
    const confirm = window.confirm('Are you sure you want to remove the item?') //window.confirm is for double confirmation before action
    if(confirm){
    dispatch({type: "Remove", _id})
    }
  }

    useEffect(() => {
       axios.get('https://nediecom.onrender.com/auth/dashboard', {withCredentials:true})
     //axios.get('http://localhost:10000/auth/dashboard' , {withCredentials:true})
      .then(res => {
        setCurrentUser(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
    },[])


  const checkout = async () => {
  try {

    //const user = JSON.parse(localStorage.getItem('currentUser._id')); // adapt this to your app's key
    const userId = currentUser._id;
    const userEmail = currentUser.email;
    const username = currentUser.username;
    const userphone = currentUser.phone;
    const useraddress = currentUser.address;

    //const phone = currentUser.phone  //not collecting it at the moment

    if (!userId) {
      navigate('/login')
      //toast.error("User not logged in");
      return;
    }
    
   // const response = await axios.post('http://localhost:10000/create-checkout-session', {cart, userId, userEmail, username, userphone, useraddress, deliveryMethod }, {withCredentials:true});
    const response = await axios.post('https://nediecom.onrender.com/create-checkout-session', {cart, userId, userEmail, username, userphone, useraddress, deliveryMethod }, {withCredentials:true});
    
    console.log("Stripe Checkout URL:", response.data.url);

    if (response.data && response.data.url) {
      window.location.href = response.data.url; // Redirect to Stripe Checkout
    } else {
      toast.error('Stripe session failed to create.');
    }
  } catch (error) {
    console.log(error);
    toast.error('Error during checkout');
  }
};

 
  return (
    <div className='cart-container'>
      <div>
         <ToastContainer position="top-right" autoClose={3000} />
         <div className='cartpagetitle-link'>
           <h2 style={{fontFamily:'Libre Baskerville'}}>&nbsp;<img src={cartimg} alt='' id='cartimg'/>Cart Items</h2>
           <Link to='/'><h4 style={{fontFamily:'Libre Baskerville', fontWeight:'200'}}><img src={handpointing} alt='' id='handpointing'/>Continue shopping</h4></Link>
         </div> 
       <br/>
       <div className='product-cart-container'>
       <div className='cart-container'>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src={cartimg} alt="Empty cart" className="empty-cart-img" style={{width:'200px', height:'200px'}} />
          <h3 style={{fontFamily:'Libre Baskerville'}}>No items in cart</h3>
          
          <Link to="/">
            <h4 style={{color:'blue', fontStyle:'italic', fontSize:'17px'}}><img src={handpointing} alt="add more" id="handpointing" /> Continue shopping</h4>
          </Link>
        </div>
        ) : ( 
          cart.map((p) => {
            return (
              <div key={p._id} className='cart-product'>
                <div className='cart-image'> 
                  <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${p.image}`} alt=""  />
                </div>
                <div className='cart-product-details' style={{fontFamily:'Libre Baskerville', fontSize:'14px'}}>
                  <div>Product:&nbsp;{p.productname}</div>
                  <div id='price'>Price: £{p.productprice.toFixed(2)}</div>
                  <div id='quantity'>Quantity:&nbsp;
                    <button onClick={() => decrease(p._id)}>-</button>
                    <button>{p.productquantity}</button>
                    <button onClick={() => increase(p._id)}>+</button>
                  </div>
                  <button onClick={() => Remove(p._id)} id='remove-button'>Remove</button>
                </div>
              </div>
            )
          })
        )}
        </div>
      
      <div className='checkout-container'>
      <div className='checkout-corner'>
        <br/>
        <div className='checkout-title'>
        <h2>Product Checkout</h2>
        {/* <h3>{currentUser._id}</h3>
        <h3>{currentUser.username}</h3>
        <h3>{currentUser.email}</h3> */}
        <h4 style={{color:'#8B0000'}}>{'(Total items includes quantity of each item in the cart)'}</h4>
        </div>
        <br/><br/>

        {/* ----- Conditional delivery system------------- */}

          <div className="delivery-options">
          <h4>Select Delivery Method:</h4>
          <div className='delivery'>
          <label>Home delivery (£4.00)</label>
            <input
              type="checkbox"
              value="home"
              checked={deliveryMethod === 'home'}
              onChange={() => setDeliveryMethod('home')}
            />
            </div>
            
          <br />
          <div className='delivery'>
          <label>Pick up locally (Free)</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              value="pickup"
              checked={deliveryMethod === 'pickup'}
              onChange={() => setDeliveryMethod('pickup')}
            />
        </div>
        </div>

        {/* ----- end conditional delivery system------------- */}


        <div className='checkoutarea'>
        <div className='checkout-items'>Total items: {totalItem(cart)}</div>
        <div className='checkout-items'>Sub total: £{totalPrice(cart)}</div><br/>
        {/* <div className='checkout-items'>Delivery fee: £4.00</div>
        <div className='checkout-items'>Total price: £{totalPrice(cart) + DELIVERY_FEE }</div>  */}

        <div className='checkout-items'>Delivery fee: £{DELIVERY_FEE.toFixed(2)}</div>
        <div className='checkout-items'>Total price: £{(totalPrice(cart) + DELIVERY_FEE).toFixed(2)}</div>
          <br/>
        <button onClick={checkout} id='checkout-button'>Checkout</button>
        </div>
        <br/>
        <br/>
        </div>
      </div>
      </div>
      <br/>
      <br/>
      </div>
    </div>
  )
}

export default CartPage
