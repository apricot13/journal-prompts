import React from "react";
import { Link } from "react-router-dom"; 

const Header = props => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/journaling">Journaling</Link></li>
    <li><Link to="/braindump">Braindump</Link></li>
    <li><Link to="/blog-posts">Blog posts</Link></li>
    <li><Link to="/drawing">Drawing</Link></li>
    <li><Link to="/morning-pages">Morning pages</Link></li>
  </ul>
);

export default Header;