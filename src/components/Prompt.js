import React from "react";
import * as Styles from './Prompt.styles.js';


const Prompt = props => {
  
  return (
  <Styles.Container>
    <Styles.Text>{props.text}</Styles.Text>
    <Styles.Type type={props.type}>{props.type}</Styles.Type>
  </Styles.Container>
)};

export default Prompt;