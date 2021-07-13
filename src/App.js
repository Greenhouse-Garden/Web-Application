import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import Layout from "./pages/Layout"
import SignIn from "./pages/SignIn"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          
          
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
