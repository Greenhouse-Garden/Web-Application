import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import Layout from "./pages/Layout"
import SignIn from "./pages/SignIn"
import NewProduct from "./pages/NewProduct"
import Product from "./pages/Product"
import Catalogue from "./pages/Catalogue"
import Cart from "./pages/Cart"
import Confirm from "./pages/Confirm"
import {CookiesProvider} from 'react-cookie'
import UpdateProfile from "./pages/UpdateProfile";
import Verification from "./pages/Verification";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/signin/" component={SignIn}></Route>
            <Route exact path="/newproduct/" component={NewProduct}></Route>
            <Route exact path="/product/:id" component={Product}></Route>
            <Route exact path="/catalogue/" component={Catalogue}></Route>
            <Route exact path="/cart/" component={Cart}></Route>
            <Route exact path="/confirm/" component={Confirm}></Route>
            <Route exact path="/update/" component={UpdateProfile}></Route>
            <Route exact path="/verification/" component={Verification}></Route>

            
          </Switch>
        </Layout>
      </BrowserRouter>
    </CookiesProvider>
 
  );
}

export default App;
