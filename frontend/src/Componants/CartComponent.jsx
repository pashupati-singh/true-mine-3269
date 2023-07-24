import React, { useState } from "react";
import "../css/cartpage.css";
import { Link } from "react-router-dom";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image:
        "https://gardenguru.in/cdn/shop/products/Marigold-Nana-Patula-Yellow-Seeds_grande.jpg?v=1629235784",
    },
    {
      id: 2,
      name: "Product 2",
      price: 24.99,
      quantity: 1,
      image:
        "https://gardenguru.in/cdn/shop/products/MarigoldWhite_grande.jpg?v=1645012850",
    },
    // Add more sample products here
  ]);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Function to increase quantity of a cart item
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity of a cart item
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* <h1>Cart</h1> */}
      <div className="cart-page">
        <div className="cart-products">
          {" "}
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <>
                  <div key={item.id} className="cart-item">
                    <img
                      // width="30%"
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "150px",
                        height: "40%",
                        marginLeft: "20px",
                      }}
                    />

                    <h3 style={{ fontWeight: "500", marginLeft: "-100px" }}>
                      {item.name}
                    </h3>
                    <p style={{ fontWeight: "500", marginLeft: "-100px" }}>
                      Price: ${item.price}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        marginLeft: "80px",
                        marginTop: "-100px",
                        fontWeight: "500",
                      }}
                    >
                      Quantity: {item.quantity}
                    </p>{" "}
                    <button
                      style={{
                        marginLeft: "80px",
                        //   marginTop: "-1100px",
                        fontWeight: "500",
                      }}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "165px",
                      marginTop: "-60px",
                    }}
                  >
                    <button
                      style={{ margin: "40px" }}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div>
          {" "}
          <div style={{ fontWeight: "bold", color: "green" }}>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            {/* Add payment options here */}
            <Link to="/payment">
              <button className="btn" style={{ marginLeft: "10px" }}>
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
