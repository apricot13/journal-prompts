import React, {useState, useEffect} from "react";
import * as Styles from './Prompts.styles.js';
import promptsList from './../data';
import Prompt from "./Prompt";
import { useParams } from "react-router-dom";
import {shuffle} from './../helpers';


const Prompts = props => { 

    let { type } = useParams();
    const [list, setList] = useState(shuffle(promptsList));


    useEffect(() => {
         if(type !== undefined) {
            const newList = promptsList.filter(prompt => prompt.type === type ? prompt : null);
            setList(newList);
        }
        else {
            setList(promptsList);
        }
      }, [type]);

    return (
    <Styles.Container>
        {list.map((prompt, i) =>
            <Prompt key={i} {...prompt} />
        )}
    </Styles.Container>
)}

export default Prompts; 