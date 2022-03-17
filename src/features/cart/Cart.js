import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal } from "./cartSlice";

export function Cart() {
    const cart = useSelector(state => state.cart)
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch()
    
    // const items
    return (
      <div>
        <h5 className="text-center mb-3">Your Cart ({cart.items.length})</h5>
        <div className="content">
          {cart.items.length > 0 ? (
            <React.Fragment>
              {cart.items.map((item, i) => (
                <div className="item border-bottom" key={i}>
                  <div className="d-flex justify-content-between">
                    <p>
                      <strong>
                        {item.name} ----- {item.quantity}
                      </strong>
                    </p>
                    <div>${item.unitPrice}</div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-between pt-3">
                <p>
                  <strong>Total:</strong>
                </p>
                <div>${total}</div>
              </div>
            </React.Fragment>
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
      </div>
    );
}