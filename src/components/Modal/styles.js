import styled from 'styled-components';

export const Container = styled.main`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 990;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${ props => props.status ? 'flex' : 'none' };
    align-items: center;
    justify-content: center; 
`;

export const ModaBody = styled.section`
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    max-width: 100vw;
    max-height: 95vh;
    overflow: auto;
`;

