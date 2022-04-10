import styled from 'styled-components';

import searchIcon from "../../assets/search.png";

export const Container = styled.header`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: auto;
    height: 70px;
`;

export const SearchInput = styled.input`
    border: 0px;
    border-radius: 25px;
    width: ${props => props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFFFFF;
    background-image: url(${searchIcon});
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    transition: all ease .2s;
    font-size: 15px;
    cursor: pointer;

    &:focus{
        cursor: text;
    }
`; 
