import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import App from "./App-v1";
// import reportWebVitals from './reportWebVitals';
import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(4);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={8} onSetRating={setMovieRating} />
//       <p>this movie have {movieRating} star</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="red" size={30} className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
