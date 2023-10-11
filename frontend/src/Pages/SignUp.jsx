// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { SignUp } from "../Redux/SignUp/action";
// import image from "../Image/img1.webp";
// import "../css/sign.css";

// export const Signup = () => {
//   const { msg } = useSelector((store) => store.signReducer);
//   const [firstname, setFName] = useState("");
//   const [lastname, setlName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     console.log("Dispatch");
//     e.preventDefault();
//     const obj = { firstname, lastname, email, password };
//     dispatch(SignUp(obj));
//     console.log(msg);
//   };
//   /**{
//   "email":"omkar@gmail.om",
// "firstname":"omkar",
// "lastname":"walavalkar",
// "password":"Omakr@21143"
// } */

//   return (
//     <>
//       <img className="image" src={image} alt="error" width={"95%"} />
//       <div className="img-head">
//         <h1>HOME</h1>
//         <h1>CREATE ACCOUNT</h1>
//       </div>
//       <div className="signup">
//         <div className="heading">
//           <b className="specal">CREATE</b>{" "}
//           <b style={{ fontWeight: "bold" }}>ACCOUNT</b>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <label className="label">
//             FIRST NAME:
//             <br />
//             <input
//               className="input"
//               type="text"
//               value={firstname}
//               name="firstname"
//               onChange={(e) => setFName(e.target.value)}
//             />
//           </label>
//           <br />
//           <label className="label">
//             LAST NAME:
//             <br />
//             <input
//               className="input"
//               type="text"
//               value={lastname}
//               name="lastname"
//               onChange={(e) => setlName(e.target.value)}
//             />
//           </label>
//           <br />
//           <label className="label">
//             EMAIL:
//             <br />
//             <input
//               className="input"
//               type="email"
//               value={email}
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <br />
//           <label className="label">
//             PASSWORD:
//             <br />
//             <input
//               className="input"
//               type="password"
//               value={password}
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <br />
//           <button className="submit" type="submit">
//             CREATE
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;





import React, { useState } from "react";
import image from "../Image/img1.webp";
import "../css/sign.css";

export const Signup = () => {
  const [firstname, setFName] = useState("");
  const [lastname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(""); // Local state for displaying messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { firstname, lastname, email, password };

    try {
      const response = await fetch("https://mock-api-template2-ighr.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const data = await response.json();

      if (response.ok) {
        setMsg(data.msg);
      } else {
        setMsg("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMsg("An unexpected error occurred.");
    }
  };

  return (
    <>
      <img className="image" src={image} alt="error" width={"95%"} />
      <div className="img-head">
        <h1>HOME</h1>
        <h1>CREATE ACCOUNT</h1>
      </div>
      <div className="signup">
        <div className="heading">
          <b className="specal">CREATE</b>{" "}
          <b style={{ fontWeight: "bold" }}>ACCOUNT</b>
        </div>
        <form onSubmit={handleSubmit}>
          {/* ... rest of the form */}
          <label className="label">
            FIRST NAME:
            <br />
            <input
              className="input"
              type="text"
              value={firstname}
              name="firstname"
              onChange={(e) => setFName(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            LAST NAME:
            <br />
            <input
              className="input"
              type="text"
              value={lastname}
              name="lastname"
              onChange={(e) => setlName(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            EMAIL:
            <br />
            <input
              className="input"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            PASSWORD:
            <br />
            <input
              className="input"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="submit" type="submit">
            CREATE
          </button>
        </form>

        {msg && <p>{msg}</p>}
      </div>
    </>
  );
};

export default Signup;
