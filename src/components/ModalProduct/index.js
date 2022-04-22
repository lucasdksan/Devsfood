import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

function ModalProduct({ data, setStatus }) {

  const dispath = useDispatch();
  const [qt, setQt] = useState(1);

  useEffect(()=>{
    setQt(1);
  },[data]);

  function handleCancelButton(){
    setStatus(false);
  }

  function handleMinusQt(){
    if(qt > 1){
      setQt(qt - 1);
    }
  }

  function handlePlusQt(){
    setQt(qt + 1);
  }

  function handleAddToCart(){

    dispath({
      type: 'ADD_PRODUCT',
      payload: {
        data,
        qt
      }
    });

    setStatus(false);
  }

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
              <ProductQtImage 
                src={minusImg}
                onClick={handleMinusQt}
              />
              <ProductQtText>{qt}</ProductQtText>
              <ProductQtImage 
                src={plusImg}
                onClick={handlePlusQt}
              />
            </ProductQuantity>
            <ProductPrice>R$ {(data.price * qt).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton 
          small={true}
          onClick={handleCancelButton}
        >Cancelar</ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
      </ProductButtons>
    </Container>
  );
};

export default ModalProduct;
