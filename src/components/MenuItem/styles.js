import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin: 5px 0px;
    background-color: ${props => props.active ? '#0b4d0b': 'transparent'};
`;

export const LinkIcon = styled.img`
    width: 35px;
    height: auto;
`;