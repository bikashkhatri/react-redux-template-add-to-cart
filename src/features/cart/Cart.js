import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartTotal } from "./cartSlice";

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
                <div className="item border-bottom mt-2" key={i}>
                  <div className="d-flex justify-content-between">
                    <p>
                      <strong>
                        {item.quantity} x {item.name}
                      </strong>
                    </p>
                    <div>${item.unitPrice}</div>
                    <button
                      title="Remove"
                      type="button"
                      className="close border-0 mb-2"
                      aria-label="Close"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
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