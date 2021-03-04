import React from "react";
import * as Styles from './Header.styles.js';
import { Link } from "react-router-dom";


const Header = props => (
  <Styles.Container>
    <Styles.Logo><Link to="/">JournalPrompts</Link></Styles.Logo>
  </Styles.Container>
);

export default Header;