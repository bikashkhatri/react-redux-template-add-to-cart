import React from 'react';
import './App.css';
import Shop from './features/shop/Shop';
import { Cart } from './features/cart/Cart';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container">
                <a className="navbar-brand" href="#">Online Store</a>
            </div>
        </nav>
      <div className="content container py-4">
          <div className="row">
              <div className="col-md-8">
                  {/* items container */}
                  <Shop />
              </div>
              <div className="col-md-4">
                  {/* cart container */}
                  <Cart />
              </div>
          </div>
          <ToastContainer />
      </div>
    </div>
  );
}

export default App;
