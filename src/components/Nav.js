import React from "react";
import { Link } from "react-router-dom"; 
import styled from 'styled-components';

const DivUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
   @media (max-width: 768px) {
      display: inline-block;
      text-align: center;
    }
`;


const DivLi = styled.li`
  padding: 0 10px;
   display: block;
`;


const Header = props => (
  <DivUl>
    {/* <DivLi><Link to="/">Home</Link></DivLi> */}
    <DivLi><Link to="/journaling">Journaling</Link></DivLi>
    <DivLi><Link to="/braindump">Braindump</Link></DivLi>
    <DivLi><Link to="/blog-posts">Blog posts</Link></DivLi>
    <DivLi><Link to="/drawing">Drawing</Link></DivLi>
    <DivLi><Link to="/morning-pages">Morning pages</Link></DivLi>
  </DivUl>
);

export default Header;