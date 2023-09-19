
// Import Provider: Import the Provider component from the react-redux library. 
// The Provider component is used to make the Redux store accessible to the entire application.
// Import necessary React and ReactDOM modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main CSS file for styling
import "./index.css";

// Import the main App component
import App from "./App";

// Import a function to report web vitals (not directly related to this code)
import reportWebVitals from "./reportWebVitals";

// Import the Provider component from react-redux to integrate Redux with React
import { Provider } from "react-redux";

// Import the Redux store you created earlier
import store from "./store";

// Create a React root using ReactDOM.createRoot, specifying the root DOM element to render to
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main application component within a Provider component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
