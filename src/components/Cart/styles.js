import styled from 'styled-components';

export const CartContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 30px;
    background-color: #136713;
    border-radius: 10px 10px 0px 0px;
`;

export const CartHeader = styled.div`
    display: flex;
    height: 50px;
    width: 290px;
    align-items: center;
    cursor: pointer;
`;

export const CartBody = styled.fieldset`
    border: none;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0px 10px;
`;

export const CartText = styled.p`
    color: #FFFFFF;
    font-size: 17px;
`;