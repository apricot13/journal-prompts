import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Journaling from "./Journaling";
import BrainDump from "./BrainDump";
import BlogPosts from "./BlogPosts";
import Drawing from "./Drawing";
import MorningPages from "./MorningPages";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <div className="container mx-auto">
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
    </div>
  </BrowserRouter>
);

export default Router;