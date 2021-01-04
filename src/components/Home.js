import React from "react";
import Journaling from "./Journaling";
import BrainDump from "./BrainDump";
import BlogPosts from "./BlogPosts";
import Drawing from "./Drawing";
import MorningPages from "./MorningPages";

const Home = props => (
  <div>
    <p>
      I thought I would gather together a list of my prompts I've been collecting for the past few years in a nice easy to view way.
      <br />
      <br />
      If you have any suggestions for features <a href="https://twitter.com/apricot_13">send me a tweet</a>!
      <br />
      <br />
      <strong>How to use this site:</strong><br />
      All the prompts are listed below - you can also browse by how I've categorised them above (if you want to bookmark a specific link). Eventually I will add a random prompt generator and other filter options.
      <br />
<br /><a href="#Journaling">Journaling</a>
<br /><a href="#BrainDump">Braindump</a>
<br /><a href="#BlogPosts">Blog posts</a>
<br /><a href="#Drawing">Drawing</a>
<br /><a href="#MorningPages">Morning pages</a>


      <br />
      <br />
    </p>

    <Journaling />
      <BrainDump />
      <BlogPosts />
      <Drawing />
      <MorningPages />
  </div>
);

export default Home;