import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase. We've received your payment.</p>
      <Link to="/" style={{color:'blue'}}>Go back to home</Link>
    </div>
  );
}

export default SuccessPage;
