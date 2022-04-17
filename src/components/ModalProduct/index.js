import React from 'react';

import { 
          Container,
          ProductArea,
          ProductButtons,
          ProductDetails,
          ProductInfoArea,
          ProductPhoto,
          ProductQuantityArea,
          ProductIngredients,
          ProductName,
          ProductButton,
          ProductPrice,
          ProductQuantity,
          ProductQtImage,
          ProductQtText } from './styles';

import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

function ModalProduct({ data }) {
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image}/>
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src={minusImg}/>
              <ProductQtText>9</ProductQtText>
              <ProductQtImage src={plusImg}/>
            </ProductQuantity>
            <ProductPrice>R$ {data.price}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true}>Cancelar</ProductButton>
        <ProductButton>Adicionar ao Carrinho</ProductButton>
      </ProductButtons>
    </Container>
  );
};

export default ModalProduct;
