import React from "react"
import { toast } from "react-toastify"
import { addToCart, removeFromCart } from "../../features/cart/cartSlice"
import "react-toastify/dist/ReactToastify.css";

const notify = store => next => action => {
    console.log(action.type, addToCart.type)
    if(action.type === addToCart.type) toast.success("Item added to cart!")
    if(action.type === removeFromCart.type) toast.success("Item removed from cart!")
    next(action)
}

export default notify