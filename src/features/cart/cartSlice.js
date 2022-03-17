import { createSlice } from "@reduxjs/toolkit";

/*
item = {
    id: 1,
    name: 'Item1',
    quantity: 5,
    unitPrice: 10
}
*/

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
    //   {
    //     id: 100,
    //     name: "Item 1",
    //     quantity: 3,
    //     unitPrice: 20,
    //   },
    ],
    taxPercentage: 10,
    taxAmount: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
        const { item, quantity } = action.payload
        const { id, name, unitPrice } = item
        const index = state.items.findIndex(it => it.id === item.id)
        if(index < 0) 
            state.items.push({
                id: id,
                name: name,
                unitPrice: unitPrice,
                quantity: quantity
            })
        else
            state.items[index].quantity += quantity
    },

    removeFromCart: (state, action) => {
      state.cart.items = state.cart.items.filter(
        (item) => item.id !== action.payload.id
      );
    },

    updateItemQuantity: (state, action) => {
      const index = state.cart.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart.items[index].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateItemQuantity } = cartSlice.actions
export default cartSlice.reducer

export const selectCartItems = (state) => state.cart.items
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => {
    return total + item.unitPrice * item.quantity
}, 0)