import React from 'react';
import ReactToolTip from "react-tooltip";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import MenuItem from './components/MenuItem';
import Cart from './components/Cart';

import PrivateRoute from './components/PrivateRoute';

import { Container, Menu, PageBody } from './AppStyled';

import storeIcon from "./assets/store.png";
import orderIcon from "./assets/order.png";
import profileIcon from "./assets/profile.png";

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" link="/" icon={storeIcon}/>
                    <MenuItem title="Pedidos" link="/orders" icon={orderIcon}/>
                    <MenuItem title="Meu Perfil" link="/profile" icon={profileIcon}/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>
                                Olá Lucas Pedidos
                            </div>
                        </PrivateRoute>  
                        <PrivateRoute poth="/profile">
                            <div>
                                OII Lucas Profile
                            </div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart/>
                <ReactToolTip id="tip-top" place="top" effect="solid"/>
                <ReactToolTip id="tip-right" place="right" effect="solid"/>
            </Container>            
        </BrowserRouter>
    );
}