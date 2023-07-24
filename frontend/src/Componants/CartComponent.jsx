import React, { useEffect, useState } from "react";
import "../css/cartpage.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const CartPage = () => {
 
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Marigold Nana Patula Yellow Seeds",
      price: 10.99,
      quantity: 2,
      image:
        "https://gardenguru.in/cdn/shop/products/Marigold-Nana-Patula-Yellow-Seeds_grande.jpg?v=1629235784",
    },
    {
      id: 2,
      name: "Marigold Nana Patula Yellow Seeds",
      price: 70,
      quantity: 1,
      image:
        "https://gardenguru.in/cdn/shop/products/417-cucumber-beit-alpha-seeds_grande.jpg?v=1621080197",
    },
  ]);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // const fetchData = () => {
  //   fetch(`https://gardenguru-server.onrender.com/cart/cartproducts`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

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



// handle payment functionality

const handleOprnrazorPay =(data)=>{
  const options = {
    key: process.env.KEY_SECRET,
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: 'OW',//
      description: 'MY WEBSITE',//
      handler: function (response) {
          console.log(response, "56")
          axios.post(`http://localhost:8080/verify`, { response: response })
              .then(res => {
                  console.log(res, "37")
                  // your orders
                  // Navigate('/');
                  // setTimeout(()=>{
                  //     dispatch(afterPayment());
                  // },1000)
                  
              })
              .catch(err => {
                  console.log(err)
              })
              
      }

  }
  const rzp = new window.Razorpay(options)
  rzp.open()
}

const buyNow = async (amount) => {
  console.log("clicked");
  const _data = { amount: amount };
  axios.post(`http://localhost:8080/orders`, _data) 
    .then(res => {
      console.log(res.data);
      handleOprnrazorPay(res.data.data);
    })
    .catch(err => {
      console.log(err,"ERR");
    });

}
// end



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
                      {item.title}
                    </h3>
                    <p style={{ fontWeight: "500", marginLeft: "-100px",marginTop:"10vh",  }}>
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
                        fontWeight: "800",
                        color:"red"
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
                    <div style={{marginLeft:"10px"}}>
                       <button
                      style={{ margin:"40px",textAlign:"center",fontSize:"150%",marginTop:"10px",color:"green",border:"1px solid black",padding:"2px"  }}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button style={{margin:"40px",fontSize:"larger",marginTop:"25px",color:"red",fontSize:"150%",border:"1px solid black",padding:"5px" }} onClick={() => decreaseQuantity(item.id)}>-</button>
                    </div>
                   
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div style={{display:"flex" ,borderLeft: "1px solid green", height: "300px",
  position: "absolute",
  left: "80%",
}}>
          {" "}
          <div style={{ fontWeight: "bold", color: "green", margin:"auto" }}>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            {/* Add payment options here */}
          
              <button onClick={() => buyNow(totalAmount)} className="btn" style={{ marginLeft: "10px" }}>
                PROCEED TO CHECKOUT
              </button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
