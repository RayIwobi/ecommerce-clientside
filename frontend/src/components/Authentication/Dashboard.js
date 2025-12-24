import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './authentic.css'


function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate()

      axios.defaults.withCredentials = true
     useEffect(() => {
         axios.get('https://nediecom.onrender.com/auth/verify' ,{ withCredentials: true })
      // axios.get('http://localhost:10000/auth/verify' ,{ withCredentials: true })
        .then((res) => {
            if(res.data.status){

            }
            else{
                navigate('/login') 
            }
        })
    }, [navigate])


  // Step 1: Get the current user
  useEffect(() => {
    axios.get('https://nediecom.onrender.com/auth/dashboard', { withCredentials: true })
    //axios.get('http://localhost:10000/auth/dashboard', { withCredentials: true })
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch(err => {
        console.error('Error fetching user:', err);
      });
  }, []);

  // Step 2: When currentUser is ready, fetch orders
  useEffect(() => {
    if (!currentUser?.email) return;

 axios.get(`https://nediecom.onrender.com/orders/${currentUser.email}`, { withCredentials: true })
   //    axios.get(`http://localhost:10000/orders/${currentUser.email}`, { withCredentials: true })
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => {
        console.error('Error fetching orders:', err);
      });
  }, [currentUser]);


   axios.defaults.withCredentials = true
    const handleLogout = () => {
     axios.get('https://nediecom.onrender.com/auth/logout' , { withCredentials: true })
      //   axios.get('http://localhost:10000/auth/logout' , { withCredentials: true })
      .then(res => {
        if(res.data.status){
          navigate('/')
          window.location.reload()
        }
        else{}
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div style={{ padding: '20px' }}> 
      <br/>
      <br/>
      <div className='dashboard-title'>
         <h3>Dashboard</h3>
       <Link to='/'><h2 style={{color:'blue'}}>Return to home</h2></Link>
       <button 
       onClick={handleLogout}
       className='logoutbutton'
       >Logout
       </button>
       <br/>
       <br/>
       </div>

      {currentUser ? (
        <>
          <div className='profilearea'>
          <p>Welcome, {currentUser.username}</p><br/>
          <div><strong>Email: </strong>{currentUser.email}</div><br/>
         <div><strong>Phone number:</strong> {currentUser.phone}</div><br/>
          <div><strong>Address:</strong> {currentUser.address}</div><br/><br/>
          <Link to='/update-details'><button className='update-profile'>Update profile</button></Link>

          <h3>Your Orders:</h3>
          {orders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            orders.map(order => (
              <div key={order._id} className='order-results' >
                <p><strong>Order ID:</strong> {order._id}</p>
                <p><strong>Date/Time:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                <p><strong>Total:</strong> ${order.totalAmount}</p>
                <p><strong>Items:</strong></p><br/>
                <div>
                  {order.items.map((item, index) => (
                    <div key={index}>
                      <div>Quantity: {item.productquantity}</div>
                      <div>Product: {item.productname}</div>
                      <div>Price: (${item.productprice})</div><br/>
                    </div>
                    
                  ))}
                </div>
              </div>
              
            ))
          )}
          </div>
        </>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}

export default Dashboard;
