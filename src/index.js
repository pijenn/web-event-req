import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./styles/base.css";
import "./styles/style.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import Before from "./views/Before";
import Login from "./views/Login";
import Form from "./views/Form";
import After from "./views/After";
import NotFound from "./views/NotFound";
import Main from "./views/Main";

const ScrollToTop = ({ children }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return children;
};

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <ScrollToTop>
        {/*Landing page*/}
        <Route exact path="/:year/:oprec" component={Home} />
        {/*Login page*/}
        <Route exact path="/:year/:oprec/login" component={Login} />
        {/*Notice/registration rules page*/}
        <Route exact path="/:year/:oprec/notice" component={Before} />
        {/*Conversational form page*/}
        <Route exact path="/:year/:oprec/form" component={Form} />
        {/*Result announcement/closereg page*/}
        <Route exact path="/:year/:oprec/after" component={After} />
        {/*404 page*/}
        <Route exact path="/" component={Main} />
      </ScrollToTop>
    </Switch>
    <Footer />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
