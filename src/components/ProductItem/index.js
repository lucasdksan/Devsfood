import React from 'react';

import {  Container, 
          ProductButtonArea, 
          ProductInfoArea, 
          ProductPhoto, 
          ProductPhotoArea, 
          ProductName,
          ProductIngredients,
          ProductPrice,
          ProductButton } from './styles';

import nextIcon from '../../assets/next.png';

function ProductItem({ data, onClick }) {

  const handleClick = ()=>{
    onClick(data);
  }

  return (
    <Container onClick={handleClick}>
      <ProductPhotoArea>
        <ProductPhoto src={data.image}/>
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>R$ {data.price}</ProductPrice>
        <ProductIngredients>{data.ingredients}</ProductIngredients>
      </ProductInfoArea>
      <ProductButtonArea>
        <ProductButton src={nextIcon}/>
      </ProductButtonArea>
    </Container>
  );
};

export default ProductItem;
