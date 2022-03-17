import { Counter } from '../../features/counter/Counter'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addToCart } from '../../features/cart/cartSlice';

const ShopItem = ({ item }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const increment = () => setQuantity(quantity + 1)
    const decrement = () => {
        if(quantity > 1) setQuantity(quantity - 1)
    }

    return (
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {item.name} (${item.unitPrice})
          </h5>
          <div className="quantity"></div>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-1">{item.description}</p>
          <div>
            <Counter quantity={quantity} increment={increment} decrement={decrement} />
            <button type="button" className="btn btn-primary mt-3 w-100" 
                onClick={() => dispatch(addToCart({item: item, quantity: quantity}))}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}

export default ShopItem