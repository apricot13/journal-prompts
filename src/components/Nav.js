import React from "react";
import { Link } from "react-router-dom"; 

import * as Styles from './Nav.styles.js';



const Header = props => (
  <Styles.Container>
    <Styles.Link><Link to="/">All</Link></Styles.Link>
    <Styles.Link><Link to="/journaling">Journaling</Link></Styles.Link>
    <Styles.Link><Link to="/braindump">Braindump</Link></Styles.Link>
    <Styles.Link><Link to="/blog-posts">Blog posts</Link></Styles.Link>
    <Styles.Link><Link to="/drawing">Drawing</Link></Styles.Link>
    <Styles.Link><Link to="/morning-pages">Morning pages</Link></Styles.Link>
  </Styles.Container>
);

export default Header;