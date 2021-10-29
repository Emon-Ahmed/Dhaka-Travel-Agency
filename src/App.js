import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AllTour from "./Pages/AllTour";
import Booking from "./Pages/Booking";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import TourDetails from "./Pages/TourDetails";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute"


export default function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/alltour">
              <AllTour></AllTour>
            </Route>
            <PrivateRoute exact path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/tourdetails/:tourID">
              <TourDetails></TourDetails>
            </PrivateRoute>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
