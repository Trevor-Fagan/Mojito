import ReactDOM from "react-dom";
import App from "./App";
import { QuickstartProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <QuickstartProvider>
      <Auth0Provider domain={"dev-2nn6r8q5.us.auth0.com"} clientId={"M1kK8iKjmMvNDQNWCq6dU7Wv8pPPcZer"} redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </QuickstartProvider>,
  document.getElementById("root")
);

reportWebVitals();
