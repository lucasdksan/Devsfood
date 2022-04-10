import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px; 
    border-radius: 20px;
    background-color: ${props => props.active === props.id ? '#fff' : '#AAE09A'};
    margin: 0px 5px;
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: auto;
`;
