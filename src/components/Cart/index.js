import React from "react";

import { CartContainer, CartBody, CartHeader, CartIcon, CartText } from "./styles";

import cartIcon from "../../assets/cart.png";

const Cart = ()=>{
    return(
        <CartContainer>
            <CartHeader>
                <CartIcon src={cartIcon}/>
                <CartText>Menu Carrinho (x)</CartText>
            </CartHeader>
            <CartBody>
                
            </CartBody>
        </CartContainer>
    );
}

export default Cart;