import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import Journaling from "./Journaling";
import BrainDump from "./BrainDump";
import BlogPosts from "./BlogPosts";
import Drawing from "./Drawing";
import MorningPages from "./MorningPages";
import NotFound from "./NotFound";
import { Helmet } from "react-helmet";
import 'sanitize.css/sanitize.css';
import GlobalStyles from './../global-styles';
import styled from 'styled-components';

const DivMain = styled.div`
    width: 80%;
    margin: 0px auto;
    padding: 0 10px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 20px;
    }

`;


 


const Router = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
     </Helmet>
    <DivMain>
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/journaling" component={Journaling} />
      <Route path="/braindump" component={BrainDump} />
      <Route path="/blog-posts" component={BlogPosts} />
      <Route path="/drawing" component={Drawing} />
      <Route path="/morning-pages" component={MorningPages} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
    </DivMain>
  </BrowserRouter>
);

export default Router;