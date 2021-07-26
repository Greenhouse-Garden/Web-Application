import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import Layout from "./pages/Layout"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NewProduct from "./pages/NewProduct"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/newproduct" component={NewProduct}></Route>
          
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
