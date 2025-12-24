import React, { createContext, useReducer, useEffect } from 'react'
import CartReducer from './CartReducer'


//lines 6-9 to retain the cart items and preveent it from dissapearing
const initializer = () => {
  const localData = localStorage.getItem('cart');
  return localData ? JSON.parse(localData) : [];
};


export const CartContext = createContext() 

function ContextProvider({children}) {

    const [cart, dispatch] = useReducer(CartReducer, [], initializer)

    useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <CartContext.Provider value={{cart, dispatch}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default ContextProvider
