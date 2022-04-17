import styled from 'styled-components';

export const Container = styled.section`
    width: 650px;
    padding: 20px;
`;

export const ProductArea = styled.article`
    display: flex;
    height: 200px;
`;

export const ProductButtons = styled.article`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;  
    align-items: center;
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.fieldset`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    border: none;
`;

export const ProductDetails = styled.div`
    height: 50px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductName = styled.span`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.p`
    font-size: 14px;
`;  

export const ProductButton = styled.button`
    border: none;
    outline: none;
    background-color: #073c07;
    box-shadow: 4px 5px 0px #999;
    color: #FFF;
    font-size: ${props => props.small ? '13px' : '22px'};
    font-weight: bold;
    padding: ${props => props.small ? '5px 10px' : '10px 20px'};
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073c07;
    border-radius: 10px;
`;

export const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductQtImage = styled.img`
    width: 24px;
    height: auto;    
    margin: 0 10px;
`;

export const ProductQtText = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
`;