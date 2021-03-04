import styled from 'styled-components';


export const Container = styled.div`
    border-top: 1px solid #FFF8F5;
    border-left: 1px solid #FFF8F5;
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1fr);
    gap: 0px;
    justify-items: stretch;
    align-items: stretch;
    justify-content: stretch;
    

    @media screen and (max-width: 768px){
        display: block;
    }

    @media screen and (min-width: 2160px){   
        grid-template-columns: repeat(4, 1fr);
    }

`
