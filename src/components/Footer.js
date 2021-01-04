import React from "react";
import styled from 'styled-components';

const DivFooter = styled.div`
    text-align: center;

    @media (max-width: 768px) {
      font-size: .9rem;
    }

`;

// const H1Link  = styled(Link)`
//     color: red;
// `;

const Footer = props => (
  <DivFooter>
    <p>Powered by guinea pigs</p>
  </DivFooter>
);

export default Footer;