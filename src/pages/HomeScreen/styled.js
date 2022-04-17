import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 10px;
`;

export const CategoryArea = styled.article`
    color: #fff;
    margin-top: 20px;
    
`;

export const CategoryList = styled.aside`
    display: flex;
    margin-top: 10px;
`;

export const ProductArea = styled.article`
    margin: 10px 0px 10px 0px ;
`;

export const ProductList = styled.aside`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;

export const ProductPaginationArea = styled.article`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const ProductPaginationItem = styled.div`
    background-color: ${props => props.active === props.current ? '#ccc' : '#fff'};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    cursor: pointer;
    margin-right: 10px;
`;