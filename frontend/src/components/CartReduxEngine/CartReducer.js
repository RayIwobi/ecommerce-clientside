
export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.productquantity, 0)
}

export const totalPrice = (cart) => {
    const total = cart.reduce((sum, product) => {
        console.log("Calculating price for:", product);
        const qty = Number(product.productquantity) || 0;
        const price = Number(product.productprice) || 0;
        return sum + qty * price;
    }, 0);
    return parseFloat(total.toFixed(2));
}
    

export const CartReducer = (state, action) => { 
    switch(action.type){
        case "Add":
            //return [...state, action.product]  //...former single line but blind

             const existingIndex = state.findIndex(p => p._id === action.product._id);
            if (existingIndex >= 0) {
                // Product already in cart — increase quantity
                const updatedState = [...state];
                updatedState[existingIndex].productquantity += 1;
                return updatedState;
            } else {
                // Product not in cart — add with quantity 1
            return [...state, { ...action.product, productquantity: 1 }];
            }

        case "Remove":
            return state.filter(p => p._id !== action._id);

        case "Increase":
            const IndexI = state.findIndex(p => p._id === action._id)
            state[IndexI].productquantity += 1
            return [...state]

        case "Decrease":
            const indexD = state.findIndex(p => p._id === action._id)
            state[indexD].productquantity -= 1
            return [...state]

        default:
            return state;
      
    }
}

export default CartReducer