import React from "react";
import { Link } from "react-router-dom"; 
import styled from 'styled-components';

const DivHeader = styled.div`
    text-align: center;

    @media (max-width: 768px) {
      font-size: .9rem;
    }

`;

// const H1Link  = styled(Link)`
//     color: red;
// `;

const Header = props => (
  <DivHeader>
    <h1>
    <Link to="/">Journal Prompts</Link>
    </h1>
  </DivHeader>
);

export default Header;