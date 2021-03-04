import styled, { css } from 'styled-components';


export const Container = styled.div`
    border-right: 1px solid #FFF8F5;
    border-bottom: 1px solid #FFF8F5;
    padding: 30px;
    cursor: pointer;


    :hover {
        background-color: #FFF8F5;
    }


    /* display: flex;
    flex-direction: column;
    align-items: start; */


`

export const Text = styled.div`
    font-family: 'Rufina', serif;
    font-size: 1.5rem;

    @media screen and (max-width: 768px){
        /* font-size: 1.2rem; */
        font-size: 1.2rem;
    }
    @media screen and (min-width: 2160px){   
        font-size: 2rem;
    }

`



const typeColours = (type) => {

    switch(type) {
        case 'journaling': 
            return css`
                color: #FFF8F5;
                background-color: #70AEA9;
                `
        case 'braindump': 
        return css`
            /* color: #FFF8F5; */
            background-color: #AAC4DB;
            `
        case 'blog-posts': 
        return css`
            color: #FFF8F5;
            background-color: #F3887B;
            `
        case 'drawing': 
        return css`
            /* color: #FFF8F5; */
            background-color: #B9EEFC;
            `
        case 'morning-pages': 
        return css`
            /* color: #FFF8F5; */
            background-color: #EFD962;
            `
        default:

        break;
    }


 


// background: #70AEA9;
// background: #AAC4DB;
// background: #B1E1DC;
// background: #B9EEFC;
// background: #E7F7F6;
// background: #E9806E;
// background: #EFD962;
// background: #F2C568;
// background: #F3887B;
// background: #F3EAEB;
// background: #F4B7A2;
// background: #FAF4D0;

// color: #FFF8F5;
// background: #3C3F3B;
// background: #474E6B;
// background: #5887C9;

    

  };



export const Type = styled.span`
    font-size: .7rem;
    padding: 2px 5px;
    color: #253238;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #FFF8F5;

    ${({ type }) => typeColours(type)};
`