import styled from "styled-components";

import bg from "./assets/bg.png";

export const Container = styled.main`
    display: flex;
    height: 100vh;
`;
export const Menu = styled.aside`
    display: flex;
    width: 80px;
    background-color: #136713;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const PageBody = styled.section`
    display: flex;
    flex: 1;
    background-color: #00980d;
    background-image: url(${bg});

`;