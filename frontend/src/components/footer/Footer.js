import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import mastercard from './assets/mastercard.png'
import paypal from './assets/paypal.png'
import stripe from './assets/stripe.jpg'
import visa from './assets/visa.jpg'
import verve from './assets/verve.png'
import logo1 from '../navigation/assets/nedilogo1.png'
import facebook from '../home/assets/facebook.png'
import instagram from '../home/assets/instagram.png'
import twitter from '../home/assets/twitter.png'
// import youtube from '../home/assets/youtube.png'
// import tiktok from '../home/assets/tiktok.png'


function Footer() {
  return (
    <>
    <div className='footer-container'>
      <div className='footer-logo-name'>
        <img src={logo1} alt='logo of the site' className='footer-top-logo'/>
        <h2>NediFoods<span style={{fontSize:'15px'}}>&reg;</span></h2>
      </div>
      

   <div className='footer-inner-second'> 
  <div className='uni-body'>
    <h3 className='useful-links'>Who we are</h3>
      <Link to='/' className='internal-links'>Home</Link>
      <Link to='aboutus' className='internal-links'>About us</Link>
      <Link to='/returnpolicy' className='internal-links'>Return Policy</Link>
      <Link to='/dashboard' className='internal-links'>Sign in</Link>
    </div>

    <div className='uni-body'>
    <h3 className='useful-links'>Need help?</h3>
      <Link to='/contact' className='internal-links'>Contact us</Link>
      <Link to='/support' className='internal-links'>Support</Link>
      <Link to='/deliverypolicy' className='internal-links'>Delivery Policy</Link>
      <Link to='/support' className='internal-links'>Enquiries</Link>
    </div> 
    </div> 

    <div className='footer-aboutus'>
    <h3 className='useful-links'>Brief intro</h3>
      <p className='footer-about-content'>NediFoods is a dedicated African  
        food supplier committed to bringing authentic, 
        high-quality African groceries to Harpenden, 
        Hertfordshire, and its surrounding areas.</p>
    </div>

   <div className='footer-cardarea'>
    <h3 className='useful-links' id='weacceptlink'>We accept</h3>
    <div className='footer-cards'>
    <img src={mastercard} alt='mastercard'/>
    <img src={visa} alt='visa'/>
    <img src={stripe} alt='stripe'/>
    <img src={verve} alt='verve'/>
    <img src={paypal} alt='paypal'/>
    </div>
    </div>

    <div className='social-section'>
      <h3 className='useful-links'>Connect with us</h3>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Link ><img src={facebook} alt='facebook' style={{width:'20px', height:'20px'}}/></Link>
        <Link ><img src={instagram} alt='instagram' style={{width:'20px', height:'20px'}}/></Link>
        <Link ><img src={twitter} alt='twitter' style={{width:'20px', height:'20px'}}/></Link>
      </div>
      </div>
     
    </div>
    <div className='under-trademark' >
    <div className='uni-body'>NediFoods&reg; | All rights reserved &copy; 2025 | Built by</div>
    <div><Link to='https://techlod-1.onrender.com/home.html'>Techlod</Link> </div> 
  </div>
  </>
  )
}

export default Footer