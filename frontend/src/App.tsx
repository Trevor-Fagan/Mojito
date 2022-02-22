import React, { useEffect, useContext, useCallback } from "react";

import Products from "./Components/ProductTypes/Products";
import Items from "./Components/ProductTypes/Items";
import Context from "./Context";
<<<<<<< HEAD
import Dashboard from "./MojitoComponents/Dashboard";
import Sidebar from './MojitoComponents/Sidebar';
import Budget from "./MojitoComponents/pages/Budget";
import Expenses from "./MojitoComponents/pages/Expenses";
import Income from "./MojitoComponents/pages/Income";
import Investments from "./MojitoComponents/pages/Investments";
import SignUp from "./MojitoComponents/pages/SignUp";
import SignOut from "./MojitoComponents/pages/SignOut";
import SignIn from "./MojitoComponents/pages/SignIn";
import SpendingAnalyzer from "./MojitoComponents/pages/SpendingAnalyzer";
import TransactionHistory from "./MojitoComponents/pages/TransactionHistory";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import Link from './Components/Link/index';
import Sidebar from "./MojitoComponents/Sidebar";

import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 79698f64a888456925b1952c16137531c4d24c77

const App = () => {
  const { linkSuccess, isItemAccess, dispatch } = useContext(Context);

  const getInfo = useCallback(async () => {
    const response = await fetch("/api/info", { method: "POST" });
    if (!response.ok) {
      dispatch({ type: "SET_STATE", state: { backend: false } });
      return { paymentInitiation: false };
    }
    const data = await response.json();
    const paymentInitiation: boolean = data.products.includes(
      "payment_initiation"
    );
    dispatch({
      type: "SET_STATE",
      state: {
        products: data.products,
      },
    });
    return { paymentInitiation };
  }, [dispatch]);

  const generateToken = useCallback(
    async (paymentInitiation) => {
      const path = paymentInitiation
        ? "/api/create_link_token_for_payment"
        : "/api/create_link_token";
      const response = await fetch(path, {
        method: "POST",
      });
      if (!response.ok) {
        dispatch({ type: "SET_STATE", state: { linkToken: null } });
        return;
      }
      const data = await response.json();
      if (data) {
        if (data.error != null) {
          dispatch({
            type: "SET_STATE",
            state: {
              linkToken: null,
              linkTokenError: data.error,
            },
          });
          return;
        }
        dispatch({ type: "SET_STATE", state: { linkToken: data.link_token } });
      }
      localStorage.setItem("link_token", data.link_token); //to use later for Oauth
    },
    [dispatch]
  );

  useEffect(() => {
    const init = async () => {
      const { paymentInitiation } = await getInfo(); // used to determine which path to take when generating token
      // do not generate a new token for OAuth redirect; instead
      // setLinkToken from localStorage
      if (window.location.href.includes("?oauth_state_id=")) {
        dispatch({
          type: "SET_STATE",
          state: {
            linkToken: localStorage.getItem("link_token"),
          },
        });
        return;
      }
      generateToken(paymentInitiation);
    };
    init();
  }, [dispatch, generateToken, getInfo]);

  return (
    <Router>
        <Sidebar />
<<<<<<< HEAD
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/budget' component={Budget} />
            <Route path='/transaction_history' component={TransactionHistory} />
            <Route path='/expenses' component={Expenses} />
            <Route path='/investments' component={Investments} />
            <Route path='/spending_analyzer' component={SpendingAnalyzer} />
            <Route path='/sign_out' component={SignOut}></Route>
            <Route path='/income' component={Income}></Route>
            <Route path='/sign_up' component={SignUp}></Route>
            <Route path='/sign_in' component={SignIn}></Route>
            {/* {linkSuccess && isItemAccess && (
              <>
                <Products />
                <Items />
              </>
            )} */}
          </Switch>
    </Router>
  );
}
=======
        <Link />
        {linkSuccess && isItemAccess && (
          <>
            <Products />
            <Items />
          </>
        )}
    </Router>
  );
};
>>>>>>> 79698f64a888456925b1952c16137531c4d24c77

export default App;
