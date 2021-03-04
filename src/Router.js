import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./components/About";
import Prompts from "./components/Prompts";
import NotFound from "./pages/NotFound";
import 'sanitize.css/sanitize.css';
import GlobalStyles from './global-styles';
import * as Styles from './Router.styles.js';



const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Styles.Main id="top">
        <Styles.LeftCol>
          <Header />
          <Nav />
          <About />
        </Styles.LeftCol>
        <Styles.RightCol>
          <Switch>
            <Route exact path="/" component={Prompts}/>
            <Route path="/:type" component={Prompts}/>
            <Route component={NotFound} />
          </Switch>
        </Styles.RightCol>
        <Styles.Footer>
          <Footer />
        </Styles.Footer>  
      </Styles.Main>
    </BrowserRouter>
)
};

export default Router;