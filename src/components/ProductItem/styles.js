import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    padding: 10px;
    display: flex;
    align-items: center;
    color: #136713;
    cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
    width: 100px;
`;

export const ProductPhoto = styled.img`
    width: 100%;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
`;

export const ProductButtonArea = styled.div`
`;

export const ProductName = styled.h1`
    font-size: 20px;
    font-weight: bold; 
    margin: 0px;
`;

export const ProductPrice = styled.span`
    font-size: 14px;
`;

export const ProductIngredients = styled.span`
    font-size: 11px;
`;

export const ProductButton = styled.img`
    width: 15px;
`;