import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import { Container, CategoryArea, CategoryList, ProductArea, ProductList } from './styled';

import api from '../../services/api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

import catIcon from '../../assets/food-and-restaurant.png';
import ProductItem from '../../components/ProductItem';

export default () => {
    const history = useHistory();
    const [ headerSearch, setHeaderSearch ] = useState('');
    const [ categories, setCategories ] = useState([]);
    const [ produts, setProduts ] = useState([]);
    const [ activeCategory, setActiveCategory ] = useState(0);

    const getProducts = async ()=>{
        const prods = await api.getProducts();

        console.log(prods)

        if(prods.error == ''){
            console.log(prods.result.data);
            setProduts(prods.result.data);
        }

    }

    useEffect(()=>{
        async function getCategories(){
            const cat = await api.getCategories();  

            console.log(cat.result)

            if(cat.error == ''){
                setCategories(cat.result);
            }

            ReactTooltip.rebuild();

        } 

        getCategories();
    },[]);

    useEffect(()=>{
        getProducts();
    },[activeCategory]);

    console.log(categories)

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
            {
                categories.length > 0 && 
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem 
                            data={{
                                id: 0,
                                image:`${catIcon}`,
                                name:"Todas as categorias"
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map(( item, index )=> (
                            <CategoryItem 
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
            {
                produts.length > 0 && (
                    <ProductArea>
                        <ProductList>
                            {
                                produts.map((element, index) => {
                                    return (
                                        <ProductItem
                                            key={index}
                                            data={element}
                                        />
                                    )
                                })
                            }
                        </ProductList>
                    </ProductArea>
                )
            }
        </Container>
    );
}