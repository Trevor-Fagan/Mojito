<<<<<<< HEAD
import React, { StrictMode } from "react";
=======
import React from "react";
>>>>>>> 79698f64a888456925b1952c16137531c4d24c77
import ReactDOM from "react-dom";
import App from "./App";
import { QuickstartProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <QuickstartProvider>
      <Auth0Provider domain={"dev-2nn6r8q5.us.auth0.com"} clientId={"M1kK8iKjmMvNDQNWCq6dU7Wv8pPPcZer"} redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </QuickstartProvider>,
=======

ReactDOM.render(
  <React.StrictMode>
    <QuickstartProvider>
      <App />
    </QuickstartProvider>
  </React.StrictMode>,
>>>>>>> 79698f64a888456925b1952c16137531c4d24c77
  document.getElementById("root")
);

reportWebVitals();
