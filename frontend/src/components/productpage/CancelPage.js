import React from 'react';
import { Link } from 'react-router-dom';

function CancelPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your payment was not completed. You can try again.</p>
      <Link to="/" style={{color:'blue'}}>Return to home</Link>
    </div>
  );
}

export default CancelPage;
