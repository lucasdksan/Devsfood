import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { 
        CartContainer, 
        CartBody, 
        CartHeader, 
        CartIcon, 
        CartText,
        ProducName,
        ProductInfoArea,
        ProductItem,
        ProductPhoto,
        ProductPrice,
        ProductsArea,
        ProductQuantityArea,
        ProductQtIcon,
        ProductQtText } from "./styles";
         

import cartIcon from "../../assets/cart.png";
import iconDown from "../../assets/down.png";
import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

const Cart = ()=>{
    const dispath = useDispatch();
    const products = useSelector(state => state.cart.products);
    const [ show, setShow ] = useState(true);

    function handleCartClick(){
        setShow(!show);
    }

    function handleProductChange(key, type){
        dispath({
            type: "CHANGE_PRODUCT",
            payload: { key, type }
        });
    }

    return(
        <CartContainer>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src={cartIcon}/>
                <CartText>Menu Carrinho ({products.length})</CartText>
                {
                    show && <CartIcon src={iconDown}/>
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {
                        products.map((item, index)=>{
                            return(
                                <ProductItem key={index}>
                                    <ProductPhoto src={item.image}/>
                                    <ProductInfoArea>
                                        <ProducName>{item.name}</ProducName>
                                        <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                                    </ProductInfoArea>
                                    <ProductQuantityArea>
                                        <ProductQtIcon 
                                            src={minusImg}
                                            onClick={()=>handleProductChange(index, '-')}
                                        />
                                        <ProductQtText>{item.qt}</ProductQtText>
                                        <ProductQtIcon 
                                            src={plusImg}
                                            onClick={()=>handleProductChange(index, '+')}
                                        />
                                    </ProductQuantityArea>
                                </ProductItem>
                            )
                        })
                    }
                </ProductsArea>
            </CartBody>
        </CartContainer>
    );
}

export default Cart;