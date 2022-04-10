import React, { useState } from "react";

import { Container, Logo, SearchInput } from "./styles";

import logoIcon from "../../assets/logo.png";

const Header = ({ search, onSearch })=>{
    const [ inputActive, setInputActive ] = useState(search == '' ? false : true);

    const handleInputFocus = ()=>{
        setInputActive(true);
    }

    const handleInputBlur = ()=>{
        if(search === ''){
            setInputActive(false);
        }
    }

    const handleChange = (e)=>{
        onSearch(e.target.value);
    }

    return(
        <Container>
            <Logo src={logoIcon}/>
            <SearchInput 
                type="text" 
                value={search}
                placeholder="Digite um produto..."
                active={inputActive}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChange={handleChange}
            />
        </Container>
    );
}

export default Header;