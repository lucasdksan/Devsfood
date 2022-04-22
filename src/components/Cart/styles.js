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
    display: ${props => props.show ? 'flex' : 'none'};
    color: #FFFFFF;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0px 10px;
`;

export const CartText = styled.p`
    color: #FFFFFF;
    font-size: 17px;
    flex: 1;
`;

export const ProductsArea = styled.article`

`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px; 
`;

export const ProductInfoArea = styled.fieldset`
    border: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 0px;
`;

export const ProducName = styled.span`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.span`
    font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`;

export const ProductQtText = styled.span`
    font-size: 13px;
    font-weight: bold;
    margin: 0px 5px;
`;