import React, { useEffect } from 'react'
import './aboutpolicy.css'

//message notification
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  useEffect(() => {
  },[])
  return (
    <>
    {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    <hr className='horizontal-rule'/>
    <div className='mainabout-content'>
        
        <div className='aboutus-content'>
            <h3 className='uni-header'>Questions?</h3>
            <p className='uni-body'> 
                Email: support@nedifoods.co.uk<br/>
                Call: +44 75 8759 5988<br/>
                We’re here to make your shopping easy and convenient!

                <br/>
                <br/>

            </p>
        </div>
    </div>
    </>
  )
}

export default Contact
