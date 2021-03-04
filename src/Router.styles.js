import styled from 'styled-components';


export const Main = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 300px) 1fr;
    grid-template-rows: 1fr minmax(auto, 100px);
    gap: 0px 0px;
    grid-template-areas:
        "left right"
        "footer footer";


    @media screen and (max-width: 768px){
        display: block;
    }

`

export const LeftCol = styled.div`
    background-color: #474E6B;
    grid-area: left;

`

export const RightCol = styled.div`
    grid-area: right;

`

export const Footer = styled.div`
    grid-area: footer;
    background-color: #3C3F3B;
    color: #F3E8E4;
`